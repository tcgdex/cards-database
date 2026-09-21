import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	dexId: [491, 488],

	name: {
		en: "Darkrai & Cresselia LEGEND",
		fr: "Darkrai & Cresselia LÉGENDE",
		de: "Darkrai & Cresselia-LEGENDE",
		es: "Darkrai & Cresselia LEYENDA",
		it: "Darkrai & Cresselia LEGGENDA",
		pt: "Darkrai & Cresselia LENDA",
		'es-mx': "Darkrai & Cresselia LEYENDA"
	},

	illustrator: "Shinji Higuchi",
	rarity: "None",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "Legend",

	attacks: [{
		name: {
			en: "Lost Crisis",
			fr: "Crise perdue",
			de: "Nirgendwo-Krise",
			es: "Crisis Perdida",
			it: "Crisi Perduta",
			pt: "Crise Perdida",
			'es-mx': "Crisis Perdida"
		},

		effect: {
			en: "Choose 2 Energy attached to Darkrai & Cresselia LEGEND and put them into the Lost Zone. If any of your opponent's Pokémon would be Knocked Out by damage from this attack, put that Pokémon and all cards attached to it in the Lost Zone instead of discarding it.",
			fr: "Choisissez 2 cartes Énergie attachées à Darkrai & Cresselia LÉGENDE et placez-les dans la Zone Perdue. Si l'un des Pokémon de votre adversaire est mis K.O. par cette attaque, placez ce Pokémon et toutes les cartes qui lui sont attachées dans la Zone Perdue au lieu de le défausser.",
			de: "Wähle 2 an Darkrai- & Cresselia-LEGENDE angelegte Energiekarten und lege sie ins Nirgendwo. Wenn ein Pokémon deines Gegners durch diesen Angriff kampfunfähig würde, lege dieses Pokémon und alle daran angelegten Karten nicht auf den Ablagestapel, sondern ins Nirgendwo.",
			es: "Elige 2 Energías unidas a Darkrai & Cresselia LEYENDA y ponlas en la Zona Perdida. Si alguno de los Pokémon de tu rival fuese a quedar Fuera de Combate por daño de este ataque, pon ese Pokémon y todas las cartas unidas a él en la Zona Perdida en vez de descartarlo.",
			it: "Scegli 2 Energie assegnate a Darkrai & Cresselia LEGGENDA e mettile nell'Area Perduta. Se uno qualsiasi dei Pokémon del tuo avversario viene messo K.O. dal danno di questo attacco, metti quel Pokémon e tutte le carte a lui assegnate nell'Area Perduta invece di scartarlo.",
			pt: "Escolha 2 cards de Energia ligados a Darkrai e Cresselia LENDA e coloque-os na Zona Perdida. Se qualquer um dos Pokémon do seu oponente for Nocauteado por danos causados por esse ataque, coloque esse Pokémon e todos os cards ligados a ele na Zona Perdida em vez de descartá-lo.",
			'es-mx': "Elige 2 Energías unidas a Darkrai & Cresselia LEYENDA y ponlas en la Zona Perdida. Si alguno de los Pokémon de tu rival quedaría Fuera de Combate por daño de este ataque, pon ese Pokémon y todas las cartas unidas a él en la Zona Perdida en lugar de descartarlo."
		},

		damage: 100,
		cost: ["Darkness", "Darkness", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Moon's Invite",
			fr: "Invitation lunaire",
			de: "Mondeinladung",
			es: "Invitación Lunar",
			it: "Invito Lunare",
			pt: "Convite da Lua",
			'es-mx': "Invitación Lunar"
		},

		effect: {
			en: "Move as many damage counters on your opponent's Pokémon as you like to any of your opponent's other Pokémon in any way you like.",
			fr: "Retirez autant de marqueurs de dégât que vous le voulez aux Pokémon de votre adversaire et attribuez-les comme bon vous semble aux autres Pokémon de votre adversaire.",
			de: "Verschiebe beliebig viele Schadensmarken von Pokémon deines Gegners in beliebiger Verteilung auf andere gegnerische Pokémon.",
			es: "Mueve tantos contadores de daño de los Pokémon de tu rival como quieras a cualquiera de los otros Pokémon de tu rival de la manera que desees.",
			it: "Sposta nel modo che preferisci quanti segnalini danno vuoi tra quelli presenti sui Pokémon del tuo avversario sugli altri Pokémon del tuo avversario.",
			pt: "Mova tantos marcadores de danos dos Pokémon do seu oponente quanto desejar para quaisquer outros Pokémon do seu oponente do jeito que quiser.",
			'es-mx': "Mueve tantos contadores de daño de los Pokémon de tu rival como quieras a cualquiera de los otros Pokémon de tu rival de la manera que quieras."
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Psychic"
	}],

	retreat: 2,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907955,
				tcgplayer: 716200
			}
		}
	],
}

export default card