import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [994],
	set: Set,

	name: {
		'en-us': "Iron Moth",
		'fr-fr': "Mite-de-Fer",
		'es-es': "Ferropolilla",
		'it-it': "Falenaferrea",
		'pt-br': "Mariposa Férrea",
		'de-de': "Eisenfalter"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Suction",
			'fr-fr': "Succion",
			'es-es': "Succión",
			'it-it': "Aspirazione",
			'pt-br': "Sucção",
			'de-de': "Suktion"
		},

		effect: {
			'en-us': "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
			'fr-fr': "Soignez ce Pokémon du nombre de dégâts que vous avez infligés au Pokémon Actif de votre adversaire.",
			'es-es': "Cura a este Pokémon la misma cantidad de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
			'it-it': "Cura questo Pokémon da una quantità di danni pari a quelli che hai inflitto al Pokémon attivo del tuo avversario.",
			'pt-br': "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
			'de-de': "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Anachronism Repulsor",
			'fr-fr': "Répulsif d'Anachronisme",
			'es-es': "Antianacronismos",
			'it-it': "Repulsore Anacronistico",
			'pt-br': "Repulsor de Anacronismo",
			'de-de': "Anachronismus-Repulsion"
		},

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Ancient Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon Temps passé.",
			'es-es': "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon del pasado.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Tempo Passato.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon Ancestrais.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Pokémon aus der Vergangenheit zugefügt wird."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",


	illustrator: "Shinji Kanda",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780898,
				tcgplayer: 560319
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780898,
				tcgplayer: 560319
			}
		},
	],
}

export default card
