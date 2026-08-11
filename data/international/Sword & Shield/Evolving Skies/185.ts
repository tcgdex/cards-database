import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Medicham V",
		'fr-fr': "Charmina V",
		'es-es': "Medicham V",
		'it-it': "Medicham V",
		'pt-br': "Medicham V",
		'de-de': "Meditalis V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",
	illustrator: "Satoshi Shirai",

	attacks: [{
		name: {
			'en-us': "Yoga Loop",
			'fr-fr': "Boucle Yoga",
			'es-es': "Yoga en Bucle",
			'it-it': "Circuito Yoga",
			'pt-br': "Yoga Loop",
			'de-de': "Yogaschleife"
		},

		effect: {
			'en-us': "Put 2 damage counters on 1 of your opponent's Pokémon. If your opponent's Pokémon is Knocked Out by this attack, take another turn after this one. (Skip Pokémon Checkup.) If 1 of your Pokémon used Yoga Loop during your last turn, this attack can't be used.",
			'fr-fr': "Placez 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire. Si le Pokémon de votre adversaire est mis K.O. par cette attaque, jouez de nouveau après ce tour. (Omettez le Contrôle Pokémon.) Si l'un de vos Pokémon a utilisé Boucle Yoga pendant votre dernier tour, cette attaque ne peut pas être utilisée.",
			'es-es': "Pon 2 contadores de daño en 1 de los Pokémon de tu rival. Si un Pokémon de tu rival queda Fuera de Combate por este ataque, toma otro turno después de este. (Sáltate el Chequeo Pokémon). Si 1 de tus Pokémon usó Yoga en Bucle durante tu último turno, este ataque no se puede usar.",
			'it-it': "Metti due segnalini danno su uno dei Pokémon del tuo avversario. Se un Pokémon del tuo avversario viene messo KO da questo attacco, dopo questo turno, giocane un altro. Salta il controllo Pokémon. Se uno dei tuoi Pokémon ha usato Circuito Yoga durante il tuo ultimo turno, questo attacco non può essere usato.",
			'pt-br': "Put 2 damage counters on 1 of your opponent's Pokémon. If your opponent's Pokémon is Knocked Out by this attack, take another turn after this one. (Skip Pokémon Checkup.) If 1 of your Pokémon used Yoga Loop during your last turn, this attack can't be used.",
			'de-de': "Lege 2 Schadensmarken auf 1 Pokémon deines Gegners. Wenn ein Pokémon deines Gegners durch diese Attacke kampfunfähig wird, bist du nach diesem Zug erneut am Zug. (Überspringe den Pokémon-Check.) Wenn 1 deiner Pokémon während deines letzten Zuges Yogaschleife eingesetzt hat, kann diese Attacke nicht eingesetzt werden."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Smash Uppercut",
			'fr-fr': "Poing Fracassant",
			'es-es': "Gancho Destructor",
			'it-it': "Spaccamontante",
			'pt-br': "Smash Uppercut",
			'de-de': "Geballter Kinnhaken"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Resistance.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
			'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
			'pt-br': "This attack's damage isn't affected by Resistance.",
			'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 100,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	dexId: [308],
	regulationMark: "E",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574243,
				tcgplayer: 246706
			}
		},
	],
}

export default card
