import "tailwindcss/tailwind.css";
import CTASection from "./components/CTASection";
import DashboardShell from "./components/DashboardShell";
import DescriptionList from "./components/DescriptionList";
import { Dropdown, DropdownWithDividers } from "./components/Dropdowns";
import FormLayout from "./components/Form";
import HeroSection from "./components/HeroSection";
import InputWithDropdown from "./components/Input";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import PageHeading from "./components/PageHeading";
import PaginationFooter from "./components/PaginationFooter";
import ProductOverview from "./components/ProductOverview";
import SignIn from "./components/SignIn";
import SlideOver from "./components/SlideOver";

function App() {
	return (
		<div class={`bg-slate-600 text-slate-100 h-screen`}>
			<HeroSection />

			<DashboardShell />

			<div class={`px-48 m-auto flex justify-between`}>
				{/* <div class={`px-48 m-auto flex justify-between border-red-50 border-8`}> */}
				<Dropdown />

				<DropdownWithDividers />
			</div>

			<div class={`p-16 my-16`}>
				<DescriptionList />
			</div>

			<ProductOverview />

			<NavBar />
			<div class={`p-16 my-16`}>
				<FormLayout />
			</div>

			<PaginationFooter />

			<SignIn />

			<PageHeading />
			<CTASection />

			<InputWithDropdown />
			{/* <Modal /> */}
			{/* <SlideOver /> */}
		</div>
	);
}

export default App;
