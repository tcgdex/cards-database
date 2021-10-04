import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Abomasnow",
		fr: "Blizzaroi",
		es: "Abomasnow",
		it: "Abomasnow",
		pt: "Abomasnow",
		de: "Rexblisar"
	},

	illustrator: "Kazuma Koda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Snover",
		fr: "Blizzi",
		es: "Snover",
		it: "Snover",
		pt: "Snover",
		de: "Shnebedeck"
	},

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Soothing Scent",
				fr: "Senteur Apaisante",
				es: "Aroma Sedante",
				it: "Aroma Calmante",
				pt: "Odor Calmante",
				de: "Beruhigender Duft"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 80,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Megaton Lariat",
				fr: "Lasso Titanesque",
				es: "Lazo Megatón",
				it: "Lazo Megatonico",
				pt: "Lariat Megaton",
				de: "Megatonnenlasso"
			},

			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 140,
	types: ["Grass"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "If it sees any packs of Darumaka going after Snover, it chases them off, swinging its sizable arms like hammers."
	}
}

export default card
