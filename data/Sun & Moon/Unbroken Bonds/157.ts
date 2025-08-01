import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z",
		es: "Porygon-Z",
		it: "Porygon-Z",
		pt: "Porygon-Z",
		de: "Porygon-Z"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		474,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Porygon2",
		fr: "Porygon2",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Crazy Code",
				fr: "Code Fou",
				es: "Código Loco",
				it: "Codice Instabile",
				pt: "Código Instável",
				de: "Verrückter Code"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may attach a Special Energy card from your hand to 1 of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie spéciale de votre main à l’un de vos Pokémon.",
				es: "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Especial de tu mano a 1 de tus Pokémon.",
				it: "Durante il tuo turno, prima di attaccare, puoi assegnare a uno dei tuoi Pokémon una carta Energia speciale dalla tua mano tutte le volte che vuoi.",
				pt: "Quantas vezes desejar durante a sua vez de jogar (antes de atacar), você pode ligar 1 carta de Energia Especial da sua mão a 1 dos seus Pokémon.",
				de: "Beliebig oft während deines Zuges (bevor du angreifst) kannst du 1 Spezial-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tantrum",
				fr: "Mauvaise Humeur",
				es: "Rabieta",
				it: "Collera",
				pt: "Petulância",
				de: "Rappel"
			},
			effect: {
				en: "This Pokémon is now Confused.",
				fr: "Ce Pokémon est maintenant Confus.",
				es: "Este Pokémon pasa a estar Confundido.",
				it: "Questo Pokémon viene confuso.",
				pt: "Este Pokémon agora está Confuso.",
				de: "Dieses Pokémon ist jetzt verwirrt."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 372445
	}
}

export default card
