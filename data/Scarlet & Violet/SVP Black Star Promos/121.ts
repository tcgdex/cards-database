import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Revavroom",
		fr: "Vrombotor",
		es: "Revavroom",
		it: "Revavroom",
		pt: "Revavroom",
		de: "Knattatox"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Swagger",
			fr: "Vantardise",
			es: "Contoneo",
			it: "Bullo",
			pt: "Arrogância",
			de: "Angeberei"
		},

		effect: {
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			it: "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			de: "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Huge Tackle",
			fr: "Charge Gigantesque",
			es: "Placaje Gigante",
			it: "Macroazione",
			pt: "Investidona",
			de: "Riesiger Tackle"
		},

		effect: {
			en: "If you have more cards in your hand than your opponent, this attack does 80 more damage.",
			fr: "Si vous avez plus de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si tienes más cartas en tu mano que tu rival, este ataque hace 80 puntos de daño más.",
			it: "Se hai più carte in mano del tuo avversario, questo attacco infligge 80 danni in più.",
			pt: "Se você tiver mais cartas na mão do que seu oponente, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn du mehr Karten auf deiner Hand hast als dein Gegner, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "70+"
	}],

	retreat: 3,
	regulationMark: "G",
	illustrator: "Nisota Niso"
}

export default card