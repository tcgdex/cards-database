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

	illustrator: "kodama",
	rarity: "Common",
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
			type: "normal",
			thirdParty: {
				cardmarket: 836022,
				tcgplayer: 642175
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836022,
				tcgplayer: 642175
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836613,
				tcgplayer: 642417
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836614,
				tcgplayer: 642345
			}
		},
	],
}

export default card
