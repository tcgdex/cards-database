import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Aerodactyl",
		fr: "Ptéra",
		es: "Aerodactyl",
		it: "Aerodactyl",
		pt: "Aerodactyl",
		de: "Aerodactyl"
	},

	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		142,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Supersonic",
				fr: "Ultrason",
				es: "Supersónico",
				it: "Supersuono",
				pt: "Supersônico",
				de: "Superschall"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fossil Fangs",
				fr: "Crocs Fossiles",
				es: "Colmillos Fósil",
				it: "Zanne Fossili",
				pt: "Caninos Fossilizados",
				de: "Fossile Reißer"
			},
			effect: {
				en: "If you don’t have any Pokémon-GX or Pokémon-EX on your Bench, this attack does 90 more damage.",
				fr: "Si vous n’avez pas de Pokémon-GX ou de Pokémon-EX sur votre Banc, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si no tienes ningún Pokémon-GX o Pokémon-EX en tu Banca, este ataque hace 90 puntos de daño más.",
				it: "Se non hai dei Pokémon-GX o dei Pokémon-EX in panchina, questo attacco infligge 90 danni in più.",
				pt: "Se você não tiver nenhum Pokémon-GX ou Pokémon-EX no seu Banco, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn du kein Pokémon-GX oder Pokémon-EX auf deiner Bank hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "90+",

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

	retreat: 1,

	thirdParty: {
		cardmarket: 369057
	}
}

export default card
