import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [112],
	set: Set,

	name: {
		'en-us': "Rhydon",
		'fr-fr': "Rhinoféros",
		'es-es': "Rhydon",
		'it-it': "Rhydon",
		'pt-br': "Rhydon",
		'de-de': "Rizeros"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Rhyhorn",
		'fr-fr': "Rhinocorne",
		'es-es': "Rhyhorn",
		'it-it': "Rhyhorn",
		'pt-br': "Rhyhorn",
		'de-de': "Rihorn"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Destructive Horn",
			'fr-fr': "Corne Destructrice",
			'es-es': "Cuerno Destructivo",
			'it-it': "Corno Distruttivo",
			'pt-br': "Chifre da Destruição",
			'de-de': "Zerstörerisches Horn"
		},

		effect: {
			'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785929,
				tcgplayer: 567301
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785929,
				tcgplayer: 567301
			}
		},
	],

	illustrator: "Ryuta Fuse",

}

export default card
