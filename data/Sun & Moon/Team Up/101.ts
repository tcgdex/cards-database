import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Bronzong",
		fr: "Archéodong",
		es: "Bronzong",
		it: "Bronzong",
		pt: "Bronzong",
		de: "Bronzong"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		437,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Heatproof",
				fr: "Ignifugé",
				es: "Ignífugo",
				it: "Antifuoco",
				pt: "À Prova de Calor",
				de: "Hitzeschutz"
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from your opponent’s Fire Pokémon.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon Fire de votre adversaire.",
				es: "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon Fire de tu rival.",
				it: "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Fire del tuo avversario.",
				pt: "Previne todo o dano causado a este Pokémon por ataques dos Pokémon Fire do seu oponente.",
				de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Fire-Pokémon deines Gegners zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shady Stamp",
				fr: "Coup Louche",
				es: "Impresión Sombría",
				it: "Ombraimpronta",
				pt: "Timbre de Sombra",
				de: "Zwielichtstampfer"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 369030,
		tcgplayer: 183883
	}
}

export default card
