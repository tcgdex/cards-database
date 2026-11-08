import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [685],
	set: Set,

	name: {
		'en-us': "Slurpuff",
		'fr-fr': "Cupcanaille",
		'es-es': "Slurpuff",
		'it-it': "Slurpuff",
		'pt-br': "Slurpuff",
		'de-de': "Sabbaione"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Swirlix",
		'fr-fr': "Sucroquin",
		'es-es': "Swirlix",
		'it-it': "Swirlix",
		'pt-br': "Swirlix",
		'de-de': "Flauschling"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Slurp Slurp",
			'fr-fr': "Slurp Slurp",
			'es-es': "Sorbo a Sorbo",
			'it-it': "Slurp Slurp",
			'pt-br': "Lambança",
			'de-de': "Sabber-Sabber"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 90 damage for each heads. If both of them are tails,  your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque côté face. Si vous obtenez deux côtés pile, le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara. Si sale cruz en ambas, el Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 90 danni ogni volta che esce testa. Se esce entrambe le volte croce, il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 90 pontos de dano para cada cara. Se as duas saírem coroa, o Pokémon Ativo do seu oponente agora estará Confuso.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu. Zeigen beide Münzen Zahl, ist das Aktive Pokémon deines Gegners jetzt verwirrt."
		},

		damage: "90×"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "By taking in a person's scent, it can sniff out their mental and physical condition. It's hoped that this skill will have many medical applications.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769264,
				tcgplayer: 550134
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769264,
				tcgplayer: 550134
			}
		},
	],

	illustrator: "mingo",

}

export default card