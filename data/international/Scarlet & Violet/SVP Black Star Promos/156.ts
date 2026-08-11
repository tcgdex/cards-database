import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [195],
	set: Set,

	name: {
		'en-us': "Quagsire",
		'fr-fr': "Maraiste",
		'es-es': "Quagsire",
		'it-it': "Quagsire",
		'pt-br': "Quagsire",
		'de-de': "Morlord"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Wooper",
		'fr-fr': "Axoloto",
		'es-es': "Wooper",
		'it-it': "Wooper",
		'pt-br': "Wooper",
		'de-de': "Felino"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade",
			'es-es': "Rodar",
			'it-it': "Rotolamento",
			'pt-br': "Rolagem",
			'de-de': "Walzer"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Drenched Headbutt",
			'fr-fr': "Coup d'Boule Trempé",
			'es-es': "Cabezazo Empapado",
			'it-it': "Bottintesta Inzuppata",
			'pt-br': "Cabeçada Encharcada",
			'de-de': "Durchtränkte Kopfnuss"
		},

		effect: {
			'en-us': "Discard the top 3 cards of your deck, and this attack does 80 damage for each Energy card you discarded in this way.",
			'fr-fr': "Défaussez les 3 cartes du dessus de votre deck. Cette attaque inflige 80 dégâts pour chaque carte Énergie défaussée de cette façon.",
			'es-es': "Descarta las 3 primeras cartas de tu baraja. Este ataque hace 80 puntos de daño por cada carta de Energía que hayas descartado de esta manera.",
			'it-it': "Scarta le prime tre carte del tuo mazzo. Questo attacco infligge 80 danni per ogni carta Energia che hai scartato in questo modo.",
			'pt-br': "Descarte as 3 cartas de cima do seu baralho. Este ataque causa 80 pontos de dano para cada carta de Energia descartada desta forma.",
			'de-de': "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Energiekarte 80 Schadenspunkte zu."
		},

		damage: "80×"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",
	illustrator: "Saboteri",
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 796927,
				tcgplayer: 594403
			},
		}
	],
}

export default card
