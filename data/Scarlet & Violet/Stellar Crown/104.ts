import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [809],
	set: Set,

	name: {
		en: "Melmetal",
		fr: "Melmetal",
		es: "Melmetal",
		it: "Melmetal",
		pt: "Melmetal",
		de: "Melmetal"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],
	evolveFrom: {
		en: "Meltan",
		fr: "Meltan",
		es: "Meltan",
		it: "Meltan",
		pt: "Meltan",
		de: "Meltan"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Wrack Down",
			fr: "Réduire en Poussière",
			es: "Desmoronar",
			it: "Abbattere",
			pt: "Desmoronar",
			de: "Niederschleudern"
		},

		damage: 50
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Reforged Axe",
			fr: "Hache Reforgée",
			es: "Hacha Reforjada",
			it: "Scure Riforgiata",
			pt: "Machado Reforjado",
			de: "Umgeschmiedete Axt"
		},

		effect: {
			en: "Before doing damage, discard all Pokémon Tools from this Pokémon. If you can't discard any, this attack does nothing.",
			fr: "Avant d'infliger des dégâts, défaussez toutes les cartes Outil Pokémon de ce Pokémon. Si vous ne pouvez pas en défausser, cette attaque ne fait rien.",
			es: "Antes de infligir daño, descarta todas las Herramientas Pokémon de este Pokémon. Si no puedes descartar ninguna, este ataque no hace nada.",
			it: "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon da questo Pokémon. Se non puoi scartarne, questo attacco non ha effetto.",
			pt: "Antes de causar dano, descarte todas as Ferramentas Pokémon deste Pokémon. Se não puder descartar nenhuma, este ataque não fará nada.",
			de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen von diesem Pokémon auf deinen Ablagestapel. Wenn du keine auf deinen Ablagestapel legen kannst, hat diese Attacke keine Auswirkungen."
		},

		damage: 250
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "Takumi Wada",

	thirdParty: {
		cardmarket: 785958
	}
}

export default card
