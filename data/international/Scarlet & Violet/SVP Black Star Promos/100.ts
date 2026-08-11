import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [945],
	set: Set,

	name: {
		'en-us': "Grafaiai ex",
		'fr-fr': "Tag-Tag-ex",
		'es-es': "Grafaiai ex",
		'it-it': "Grafaiai-ex",
		'pt-br': "Grafaiai ex",
		'de-de': "Affiti-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 250,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Shroodle",
		'fr-fr': "Gribouraigne",
		'es-es': "Shroodle",
		'it-it': "Shroodle",
		'pt-br': "Shroodle",
		'de-de': "Sproxi"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Numbing Saliva",
			'fr-fr': "Salive Paralysante",
			'es-es': "Saliva Sedante",
			'it-it': "Saliva Immobilizzante",
			'pt-br': "Saliva Entorpecente",
			'de-de': "Betäubender Speichel"
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
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Toxic Throw",
			'fr-fr': "Lancé Toxique",
			'es-es': "Lanzamiento Tóxico",
			'it-it': "Lancio Tossico",
			'pt-br': "Arremesso Tóxico",
			'de-de': "Toxinwurf"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned. During your next turn, this Pokémon can't use Toxic Throw.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Lancé Toxique.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante tu próximo turno, este Pokémon no puede usar Lanzamiento Tóxico.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il tuo prossimo turno, questo Pokémon non può usare Lancio Tossico.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o seu próximo turno, este Pokémon não poderá usar Arremesso Tóxico.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Während deines nächsten Zuges kann dieses Pokémon Toxinwurf nicht einsetzen."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	suffix: "ex",
	illustrator: "aky CG Works",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 764544,
				tcgplayer: 546448
			},
		},
		{
			type: "holo",
			size: "jumbo",
			thirdParty: {
				cardmarket: 764545,
				tcgplayer: 548540
			}
		}
	],
}

export default card
