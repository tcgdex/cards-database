import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [809],
	set: Set,

	name: {
		'en-us': "Melmetal",
		'fr-fr': "Melmetal",
		'es-es': "Melmetal",
		'it-it': "Melmetal",
		'pt-br': "Melmetal",
		'de-de': "Melmetal"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Meltan",
		'fr-fr': "Meltan",
		'es-es': "Meltan",
		'it-it': "Meltan",
		'pt-br': "Meltan",
		'de-de': "Meltan"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Wrack Down",
			'fr-fr': "Réduire en Poussière",
			'es-es': "Desmoronar",
			'it-it': "Abbattere",
			'pt-br': "Desmoronar",
			'de-de': "Niederschleudern"
		},

		damage: 50
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Reforged Axe",
			'fr-fr': "Hache Reforgée",
			'es-es': "Hacha Reforjada",
			'it-it': "Scure Riforgiata",
			'pt-br': "Machado Reforjado",
			'de-de': "Umgeschmiedete Axt"
		},

		effect: {
			'en-us': "Before doing damage, discard all Pokémon Tools from this Pokémon. If you can't discard any, this attack does nothing.",
			'fr-fr': "Avant d'infliger des dégâts, défaussez toutes les cartes Outil Pokémon de ce Pokémon. Si vous ne pouvez pas en défausser, cette attaque ne fait rien.",
			'es-es': "Antes de infligir daño, descarta todas las Herramientas Pokémon de este Pokémon. Si no puedes descartar ninguna, este ataque no hace nada.",
			'it-it': "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon da questo Pokémon. Se non puoi scartarne, questo attacco non ha effetto.",
			'pt-br': "Antes de causar dano, descarte todas as Ferramentas Pokémon deste Pokémon. Se não puder descartar nenhuma, este ataque não fará nada.",
			'de-de': "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen von diesem Pokémon auf deinen Ablagestapel. Wenn du keine auf deinen Ablagestapel legen kannst, hat diese Attacke keine Auswirkungen."
		},

		damage: 250
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 785958,
				tcgplayer: 567330
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785958,
				tcgplayer: 567330
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 819402,
			}
		},
	],

	illustrator: "Takumi Wada",

}

export default card
