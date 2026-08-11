import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [214],
	set: Set,

	name: {
		'en-us': "Heracross",
		'fr-fr': "Scarhino",
		'es-es': "Heracross",
		'it-it': "Heracross",
		'pt-br': "Heracross",
		'de-de': "Skaraborn"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

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

		damage: 60
	}, {
		cost: ["Grass", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Seismic Toss",
			'fr-fr': "Frappe Atlas",
			'es-es': "Sísmico",
			'it-it': "Movimento Sismico",
			'pt-br': "Arremesso Sísmico",
			'de-de': "Geowurf"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "With its herculean powers, it can easily throw around an object that is 100 times its own weight.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769182,
				tcgplayer: 550052
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769182,
				tcgplayer: 550052
			}
		},
	],

	illustrator: "Toshinao Aoki",

}

export default card