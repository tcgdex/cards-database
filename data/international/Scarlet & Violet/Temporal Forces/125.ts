import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [463],
	set: Set,

	name: {
		'en-us': "Lickilicky",
		'fr-fr': "Coudlangue",
		'es-es': "Lickilicky",
		'it-it': "Lickilicky",
		'pt-br': "Lickilicky",
		'de-de': "Schlurplek"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Lickitung",
		'fr-fr': "Excelangue",
		'es-es': "Lickitung",
		'it-it': "Lickitung",
		'pt-br': "Lickitung",
		'de-de': "Schlurp"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Body Slam",
			'fr-fr': "Plaquage",
			'es-es': "Golpe Cuerpo",
			'it-it': "Corposcontro",
			'pt-br': "Pancada Corporal",
			'de-de': "Bodyslam"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Tonguenado",
			'fr-fr': "Déferlante de Langues",
			'es-es': "Tornado de Lametones",
			'it-it': "Leccaciclone",
			'pt-br': "Turbilíngua",
			'de-de': "Schlecksturm"
		},

		effect: {
			'en-us': "Flip 4 coins. This attack does 70 damage for each heads.",
			'fr-fr': "Lancez 4 pièces. Cette attaque inflige 70 dégâts pour chaque côté face.",
			'es-es': "Lanza 4 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa.",
			'pt-br': "Jogue 4 moedas. Este ataque causa 70 pontos de dano para cada cara.",
			'de-de': "Wirf 4 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu."
		},

		damage: "70×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "H",

	description: {
		'en-us': "Lickilicky's strange tongue can stretch to many times the length of its body. No one has figured out how Lickilicky's tongue can stretch so far.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760755,
				tcgplayer: 542869
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760755,
				tcgplayer: 542869
			}
		},
	],

	illustrator: "kirisAki",

}

export default card