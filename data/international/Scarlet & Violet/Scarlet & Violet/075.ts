import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [922],
	set: Set,

	name: {
		'en-us': "Pawmo",
		'fr-fr': "Pohmotte",
		'es-es': "Pawmo",
		'it-it': "Pawmo",
		'pt-br': "Pawmo",
		'de-de': "Pamamo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Pawmi",
		'fr-fr': "Pohm"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Thunder Shock",
			'fr-fr': "Éclair",
			'es-es': "Impactrueno",
			'it-it': "Tuonoshock",
			'pt-br': "Trovoada de Choques",
			'de-de': "Donnerschock"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Head Bolt",
			'fr-fr': "Éclair Frontal",
			'es-es': "Rayo de Cabeza",
			'it-it': "Zuccalampo",
			'pt-br': "Raio de Cabeça",
			'de-de': "Kopf-Blitz"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Saya Tsuruta",

	description: {
		'en-us': "Pawmo uses a unique fighting technique in which it uses its forepaws to strike foes and zap them with electricity from its paw pads simultaneously.",
	},

	thirdParty: {
        cardmarket: 702371,
        tcgplayer: 487930
    }
}

export default card