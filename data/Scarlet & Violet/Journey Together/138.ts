import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Hop's Cramorant",
		fr: "Nigosier de Nabil",
		es: "Cramorant de Paul",
		de: "Hops Urgl",
		it: "Cramorant di Hop",
		pt: "Cramorant do Lupo",
		'es-mx': "Cramorant de Paul"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Fickle Spitting",
			fr: "Crachement Inconstant",
			es: "Escupitajo Impredecible",
			de: "Wankelmütiges Spucken",
			it: "Sputo Capriccioso",
			pt: "Cusparada Errática",
			'es-mx': "Escupitajo Impreciso"
		},

		effect: {
			en: "If your opponent doesn't have exactly 3 or 4 Prize cards remaining, this attack does nothing.",
			fr: "S'il ne reste pas exactement 3 ou 4 cartes Récompense à votre adversaire, cette attaque ne fait rien.",
			es: "Si a tu rival no le quedan exactamente 3 o 4 cartas de Premio, este ataque no hace nada.",
			de: "Wenn dein Gegner nicht genau 3 oder 4 verbleibende Preiskarten hat, hat diese Attacke keine Auswirkungen.",
			it: "Se il tuo avversario non ha esattamente tre o quattro carte Premio rimanenti, questo attacco non ha effetto.",
			pt: "Se o seu oponente não tiver exatamente 3 ou 4 cartas de Prêmio restantes, este ataque não fará nada.",
			'es-mx': "Si a tu rival no le quedan exactamente 3 o 4 cartas de Premio, este ataque no hace nada."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
