import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Hop's Cramorant",
		fr: "Nigosier de Nabil",
		es: "Cramorant de Paul",
		'es-mx': "Cramorant de Paul",
		de: "Hops Urgl",
		it: "Cramorant di Hop",
		pt: "Cramorant do Lupo"
	},

	illustrator: "Saboteri",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",
	dexId: [845],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Fickle Spitting",
			fr: "Crachement Inconstant",
			es: "Escupitajo Impredecible",
			'es-mx': "Escupitajo Impreciso",
			de: "Wankelmütiges Spucken",
			it: "Sputo Capriccioso",
			pt: "Cusparada Errática"
		},

		effect: {
			en: "If your opponent doesn't have exactly 3 or 4 Prize cards remaining, this attack does nothing.",
			fr: "S'il ne reste pas exactement 3 ou 4 cartes Récompense à votre adversaire, cette attaque ne fait rien.",
			es: "Si a tu rival no le quedan exactamente 3 o 4 cartas de Premio, este ataque no hace nada.",
			'es-mx': "Si a tu rival no le quedan exactamente 3 o 4 cartas de Premio, este ataque no hace nada.",
			de: "Wenn dein Gegner nicht genau 3 oder 4 verbleibende Preiskarten hat, hat diese Attacke keine Auswirkungen.",
			it: "Se il tuo avversario non ha esattamente tre o quattro carte Premio rimanenti, questo attacco non ha effetto.",
			pt: "Se o seu oponente não tiver exatamente 3 ou 4 cartas de Prêmio restantes, este ataque não fará nada."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869788,
			tcgplayer: 675989
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869788,
			tcgplayer: 675989
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870411,
			tcgplayer: 676990
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870412,
			tcgplayer: 677130
		}
	},
],
}

export default card