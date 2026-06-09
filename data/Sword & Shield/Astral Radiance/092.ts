import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [215],
	set: Set,

	name: {
		en: "Hisuian Sneasel",
		fr: "Farfuret de Hisui",
		es: "Sneasel de Hisui",
		it: "Sneasel di Hisui",
		pt: "Sneasel de Hisui",
		de: "Hisui-Sniebel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			it: "Graffio",
			pt: "Arranhão",
			de: "Kratzer"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe",
			es: "Cuchillada Garra",
			it: "Lacerartiglio",
			pt: "Golpe de Garra",
			de: "Klauenschlitzer"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "Its sturdy, curved claws are ideal for traversing precipitous cliffs. From the tips of these claws drips a venom that infiltrates the nerves of any prey caught in Sneasel's grasp.",
	},

	thirdParty: {
		cardmarket: 658720,
		tcgplayer: 272293
	}
}

export default card