import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [633],
	set: Set,

	name: {
		'en-us': "Deino",
		'fr-fr': "Solochi",
		'de-de': "Kapuno",
		'it-it': "Deino",
		'pt-br': "Deino",
		'es-es': "Deino",
		'es-mx': "Deino"
	},

	illustrator: "Teeziro",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Body Slam",
			'fr-fr': "Plaquage",
			'de-de': "Bodyslam",
			'it-it': "Corposcontro",
			'pt-br': "Pancada Corporal",
			'es-es': "Golpe Cuerpo",
			'es-mx': "Golpe de Cuerpo"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: 20
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Darkness Fang",
			'fr-fr': "Croc Obscur",
			'de-de': "Fänge der Dunkelheit",
			'it-it': "Oscurizanna",
			'pt-br': "Presa Sombria",
			'es-es': "Colmillo de Oscuridad",
			'es-mx': "Colmillo de Oscuridad"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836178,
				tcgplayer: 642257
			}
		},
	],
}

export default card
