import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [834],
	set: Set,

	name: {
		'en-us': "Drednaw",
		'fr-fr': "Torgamord",
		'es-es': "Drednaw",
		'it-it': "Drednaw",
		'pt-br': "Drednaw",
		'de-de': "Kamalm"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Chewtle",
		'fr-fr': "Khélocrok",
		'es-es': "Chewtle",
		'it-it': "Chewtle",
		'pt-br': "Chewtle",
		'de-de': "Kamehaps"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Impervious Shell",
			'fr-fr': "Coquille Impénétrable",
			'es-es': "Caparazón Impenetrable",
			'it-it': "Guscio Impenetrabile",
			'pt-br': "Casco Impenetrável",
			'de-de': "Undurchdringlicher Panzer"
		},

		effect: {
			'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon if that damage is 200 or more.",
			'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon de votre adversaire si ces dégâts sont de 200 ou plus.",
			'es-es': "Se evita todo el daño infligido a este Pokémon por ataques de los Pokémon de tu rival si ese daño es igual o superior a 200 puntos de daño.",
			'it-it': "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon del tuo avversario se quei danni sono 200 o più.",
			'pt-br': "Previna todo o dano causado a este Pokémon por ataques dos Pokémon do seu oponente se aquele dano for 200 ou mais.",
			'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon deines Gegners zugefügt wird, wenn jener Schaden 200 Schadenspunkte oder mehr beträgt."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hard Crunch",
			'fr-fr': "Mâchouil'Dur",
			'es-es': "Aplaste Contundente",
			'it-it': "Ultrasgranocchio",
			'pt-br': "Mastigada Bruta",
			'de-de': "Kräftiger Knirscher"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 80 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 80 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 80 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 785898,
				tcgplayer: 567270
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785898,
				tcgplayer: 567270
			}
		},
	],

	illustrator: "Dsuke",

}

export default card
