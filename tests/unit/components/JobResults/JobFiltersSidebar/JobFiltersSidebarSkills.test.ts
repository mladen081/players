import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { createTestingPinia } from "@pinia/testing";

import { useUserStore } from "@/stores/user";

import JobFiltersSidebarSkills from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarSkills.vue";
import exp from "constants";

describe("JobFiltersSidebarSkills", () => {
  const renderJobFiltersSidebarSkills = () => {
    const pinia = createTestingPinia();
    const userStore = useUserStore();

    render(JobFiltersSidebarSkills, {
      global: {
        plugins: [pinia],
      },
    });

    return { userStore };
  };

  it("populates search input store", async () => {
    const { userStore } = renderJobFiltersSidebarSkills();
    userStore.skillsSearchTerm = "Programmer";
    const input = await screen.findByRole<HTMLInputElement>("textbox");
    expect(input.value).toBe("Programmer");
  });

  it("writes user input to store", async () => {
    const { userStore } = renderJobFiltersSidebarSkills();
    userStore.skillsSearchTerm = "";
    const input = screen.getByRole<HTMLInputElement>("textbox");
    await userEvent.type(input, "V");
    await userEvent.click(document.body);

    expect(userStore.UPDATE_SKILLS_SEAECH_TERM).toBeCalledWith("V");
  });

  it("removes whitespace from user input", async () => {
    const { userStore } = renderJobFiltersSidebarSkills();
    userStore.skillsSearchTerm = "";
    const input = screen.getByRole<HTMLInputElement>("textbox");
    await userEvent.type(input, "    Vue Developer    ");
    await userEvent.click(document.body);

    expect(userStore.UPDATE_SKILLS_SEAECH_TERM).toBeCalledWith("Vue Developer");
  });
});