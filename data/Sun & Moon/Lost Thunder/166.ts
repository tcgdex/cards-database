import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Toucannon",
		fr: "Bazoucan",
		es: "Toucannon",
		it: "Toucannon",
		pt: "Toucannon",
		de: "Tukanon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		733,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Trumbeak",
		fr: "Piclairon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Heat Beak",
				fr: "Bec Thermique",
				es: "Pico Ígneo",
				it: "Becco Infuocato",
				pt: "Bico de Calor",
				de: "Hitzeschnabel"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giganticannon",
				fr: "Gigantocanon",
				es: "Gigantoucañón",
				it: "Giganticannone",
				pt: "Gigacanhão",
				de: "Gigantukanone"
			},
			effect: {
				en: "If this Pokémon evolved during this turn, this attack does nothing.",
				fr: "Si ce Pokémon a évolué pendant ce tour, cette attaque ne fait rien.",
				es: "Si este Pokémon ha evolucionado durante este turno, este ataque no hace nada.",
				it: "Se questo Pokémon si è evoluto durante questo turno, questo attacco non ha effetto.",
				pt: "Se este Pokémon evoluiu durante esta vez de jogar, este ataque não fará nada.",
				de: "Wenn sich dieses Pokémon während dieses Zuges entwickelt hat, hat diese Attacke keine Auswirkungen."
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 365802,
		tcgplayer: 178989
	}
}

export default card
