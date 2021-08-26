import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Weavile",
		fr: "Dimoret",
		es: "Weavile",
		it: "Weavile",
		pt: "Weavile",
		de: "Snibunna"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		461,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Tear Away",
				fr: "Arrachement",
				es: "Arrancar",
				it: "Strappo",
				pt: "Romper",
				de: "Wegreißen"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may put a Pokémon Tool card attached to 1 of your Pokémon into your hand.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez placer une carte Outil Pokémon attachée à l’un de vos Pokémon dans votre main.",
				es: "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes poner 1 carta de Herramienta Pokémon unida a 1 de tus Pokémon en tu mano.",
				it: "Durante il tuo turno, prima di attaccare, puoi aggiungere alle carte che hai in mano una carta Oggetto Pokémon assegnata a uno dei tuoi Pokémon tutte le volte che vuoi.",
				pt: "Tantas vezes quanto desejar durante sua vez de jogar (antes de atacar), você pode colocar um card de Ferramenta Pokémon ligado a 1 dos seus Pokémon na sua mão.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Pokémon-Ausrüstung, die an 1 deiner Pokémon angelegt ist, auf deine Hand nehmen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				es: "Cuchillada",
				it: "Lacerazione",
				pt: "Talho",
				de: "Schlitzer"
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
