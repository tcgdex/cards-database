import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Goupix",
		en: "Vulpix",
		es: "Vulpix",
		it: "Vulpix",
		pt: "Vulpix",
		de: "Vulpix"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			fr: "Super Roussi",
			en: "Super Singe",
			es: "Superquemadura",
			it: "Super Scottata",
			pt: "Superchamuscada",
			de: "Super-Versengung"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Queimado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verbrannt."
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card