import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [119],
	set: Set,

	name: {
		'fr-fr': "Poissoroy",
		'en-us': "Seaking",
		'es-es': "Seaking",
		'it-it': "Seaking",
		'pt-br': "Seaking",
		'de-de': "Golking"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Poissirène",
		'en-us': "Goldeen",
		'es-es': "Goldeen",
		'it-it': "Goldeen",
		'pt-br': "Goldeen",
		'de-de': "Goldini"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Nage Libre",
			'en-us': "Swim Freely",
			'es-es': "Nado Libre",
			'it-it': "Nuotata Libera",
			'pt-br': "Nadar Sossegado",
			'de-de': "Freischwimmen"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Aqua-Corne",
			'en-us': "Aqua Horn",
			'es-es': "Cuerno Aqua",
			'it-it': "Idrocorno",
			'pt-br': "Chifre Aquático",
			'de-de': "Aquahorn"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie {W} attachée à ce Pokémon.",
			'en-us': "This attack does 30 more damage for each {W} Energy attached to this Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía {W} unida a este Pokémon.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia {W} assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia {W} ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {W}-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Using its horn, it bores holes in riverbed boulders, making nests to prevent its eggs from washing away.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733714,
				tcgplayer: 516682,
				cardtrader: 261217
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733714,
				tcgplayer: 516682,
				cardtrader: 261217
			}
		},
	],

	illustrator: "SIE NANAHARA",

	
}

export default card
