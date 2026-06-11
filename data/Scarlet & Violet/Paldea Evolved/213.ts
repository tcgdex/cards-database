import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [575],
	set: Set,

	name: {
		fr: "Mesmérella",
		en: "Gothorita",
		es: "Gothorita",
		it: "Gothorita",
		pt: "Gothorita",
		de: "Hypnomorba"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	evolveFrom: {
		fr: "Scrutella",
		en: "Gothita",
		es: "Gothita",
		it: "Gothita",
		pt: "Gothita",
		de: "Mollimorba"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Contrôleur d'Esprit",
			en: "Mind Bend",
			es: "Fusión Mental",
			it: "Fusione Mentale",
			pt: "Dobra Mentes",
			de: "Gedankenverbiegung"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			en: "Your opponent's Active Pokémon is now Confused.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Super Psy",
			en: "Super Psy Bolt",
			es: "Superrayo Psi",
			it: "Superpsico",
			pt: "Super-raio Psíquico",
			de: "Super-Psischlag"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715688,
				tcgplayer: 497616,
				cardtrader: 248863
			}
		},
	],

	illustrator: "SIE NANAHARA",

	description: {
		en: "This Pokémon will hypnotize children to put them to sleep before carrying them away. Be wary of nights when the starlight is bright.",
	},
}

export default card
