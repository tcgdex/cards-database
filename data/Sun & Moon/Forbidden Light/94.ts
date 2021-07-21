import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Goodra",
		fr: "Muplodocus",
		es: "Goodra",
		it: "Goodra",
		pt: "Goodra",
		de: "Viscogon"
	},
	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		706,
	],
	hp: 160,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Sliggoo",
		fr: "Colimucus",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hydration",
				fr: "Hydratation",
				es: "Hidratación",
				it: "Idratazione",
				pt: "Hidratação",
				de: "Hydration"
			},
			effect: {
				en: "Whenever you attach a Water Energy card from your hand to this Pokémon, heal 20 damage from it.",
				fr: "Chaque fois que vous attachez une carte Énergie Water de votre main à ce Pokémon, soignez 20 dégâts à ce Pokémon.",
				es: "Cada vez que unas 1 carta de Energía Water de tu mano a este Pokémon, cúrale 20 puntos de daño.",
				it: "Ogni volta che assegni una carta Energia Water a questo Pokémon dalla tua mano, curalo da 20 danni.",
				pt: "Sempre que ligar 1 carta de Energia Water da sua mão a este Pokémon, cure 20 pontos de dano dele.",
				de: "Heile jedes Mal, wenn du 1 Water-Energiekarte aus deiner Hand an dieses Pokémon anlegst, 20 Schadenspunkte bei ihm."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Water",
				"Colorless",
			],
			name: {
				en: "Soaking Horn",
				fr: "Corne Trempage",
				es: "Cuerno Anegador",
				it: "Inondacorno",
				pt: "Chifre Encharcador",
				de: "Triefendes Horn"
			},
			effect: {
				en: "If this Pokémon was healed during this turn, this attack does 80 more damage.",
				fr: "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si este Pokémon ha sido curado durante este turno, este ataque hace 80 puntos de daño más.",
				it: "Se questo Pokémon è stato curato durante questo turno, questo attacco infligge 80 danni in più.",
				pt: "Se este Pokémon foi curado durante esta vez de jogar, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn dieses Pokémon während dieses Zuges geheilt wurde, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
