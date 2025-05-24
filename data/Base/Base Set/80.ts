import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Defender",
		pt: "Defender",
		fr: "Defender",
		de: "Defender"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach Defender to 1 of your Pokémon. At the end of your opponent's next turn, discard Defender. Damage done to that Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
		pt: "Anexe Defender a 1 dos seus Pokémon. No final do próximo turno do seu oponente, descarte Defender. O dano causado a esse Pokémon por ataques é reduzido em 20 (após aplicar Weakness e Resistance).",
		fr: "Attachez Defender à 1 de vos Pokémon. À la fin du prochain tour de votre adversaire, défaussez Defender. Les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		de: "Lege Defender auf einem Deiner Pokémon ab, und entferne die Karte nach dem nächsten gegenerischen Angriff wieder. Der Deinem Pokémon zugefühgte Schaden wird um 20 Schadenspunkte reduziert (nachdem Schäwche und Resistenz abgerechnet wurden)."
	}
}

export default card
