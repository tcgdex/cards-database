import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Medicham V",
		fr: "Charmina V",
		es: "Medicham V",
		it: "Medicham V",
		pt: "Medicham V",
		de: "Meditalis V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",
	illustrator: "Satoshi Shirai",
	suffix: "V",

	attacks: [{
		name: {
			en: "Yoga Loop",
			fr: "Boucle Yoga",
			es: "Yoga en Bucle",
			it: "Circuito Yoga",
			pt: "Yoga Loop",
			de: "Yogaschleife"
		},

		effect: {
			en: "Put 2 damage counters on 1 of your opponent’s Pokémon. If your opponent’s Pokémon is Knocked Out by this attack, take another turn after this one. (Skip Pokémon Checkup.) If 1 of your Pokémon used Yoga Loop during your last turn, this attack can’t be used.",
			fr: "Placez 2 marqueurs de dégâts sur l’un des Pokémon de votre adversaire. Si le Pokémon de votre adversaire est mis K.O. par cette attaque, jouez de nouveau après ce tour. (Omettez le Contrôle Pokémon.) Si l’un de vos Pokémon a utilisé Boucle Yoga pendant votre dernier tour, cette attaque ne peut pas être utilisée.",
			es: "Pon 2 contadores de daño en 1 de los Pokémon de tu rival. Si un Pokémon de tu rival queda Fuera de Combate por este ataque, toma otro turno después de este. (Sáltate el Chequeo Pokémon). Si 1 de tus Pokémon usó Yoga en Bucle durante tu último turno, este ataque no se puede usar.",
			it: "Metti due segnalini danno su uno dei Pokémon del tuo avversario. Se un Pokémon del tuo avversario viene messo KO da questo attacco, dopo questo turno, giocane un altro. Salta il controllo Pokémon. Se uno dei tuoi Pokémon ha usato Circuito Yoga durante il tuo ultimo turno, questo attacco non può essere usato.",
			pt: "Put 2 damage counters on 1 of your opponent’s Pokémon. If your opponent’s Pokémon is Knocked Out by this attack, take another turn after this one. (Skip Pokémon Checkup.) If 1 of your Pokémon used Yoga Loop during your last turn, this attack can’t be used.",
			de: "Lege 2 Schadensmarken auf 1 Pokémon deines Gegners. Wenn ein Pokémon deines Gegners durch diese Attacke kampfunfähig wird, bist du nach diesem Zug erneut am Zug. (Überspringe den Pokémon-Check.) Wenn 1 deiner Pokémon während deines letzten Zuges Yogaschleife eingesetzt hat, kann diese Attacke nicht eingesetzt werden."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Smash Uppercut",
			fr: "Poing Fracassant",
			es: "Gancho Destructor",
			it: "Spaccamontante",
			pt: "Smash Uppercut",
			de: "Geballter Kinnhaken"
		},

		effect: {
			en: "This attack’s damage isn’t affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			pt: "This attack’s damage isn’t affected by Resistance.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 100,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	dexId: [308]
}

export default card