import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [212],
	set: Set,

	name: {
		'en-us': "Scizor",
		'fr-fr': "Cizayox",
		'es-es': "Scizor",
		'it-it': "Scizor",
		'pt-br': "Scizor",
		'de-de': "Scherox"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
		'es-es': "Scyther",
		'it-it': "Scyther",
		'pt-br': "Scyther",
		'de-de': "Sichlor"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "X-Scissor",
			'fr-fr': "Plaie Croix",
			'es-es': "Tijera X",
			'it-it': "Forbice X",
			'pt-br': "Tesoura X",
			'de-de': "Kreuzschere"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Dangerous Claws",
			'fr-fr': "Griffes Redoutables",
			'es-es': "Zarpas Peligrosas",
			'it-it': "Artigli Pericolosi",
			'pt-br': "Garras Temerárias",
			'de-de': "Bedrohliche Klauen"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Basic Pokémon, this attack does 80 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon de base, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Básico, este ataque hace 80 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Base, questo attacco infligge 80 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Bulky pincers account for one third of Scizor's body weight. A single swing of one of these pincers will crush a boulder completely.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691804,
				tcgplayer: 478223
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691804,
				tcgplayer: 478223
			}
		},
	],
}

export default card
