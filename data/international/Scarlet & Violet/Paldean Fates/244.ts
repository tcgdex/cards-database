import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [1003],
	set: Set,

	name: {
		'en-us': "Ting-Lu ex",
		'fr-fr': "Dinglu-ex",
		'es-es': "Ting-Lu ex",
		'it-it': "Ting-Lu-ex",
		'de-de': "Dinglu-ex",
		'pt-br': "Ting-Lu ex"
	},

	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 240,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Cursed Land",
			'fr-fr': "Terre Maudite",
			'es-es': "Tierra Maldita",
			'it-it': "Terra Maledetta",
			'de-de': "Verfluchtes Land",
			'pt-br': "Terra Amaldiçoada"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, your opponent's Pokémon in play that have any damage counters on them have no Abilities, except for Pokémon ex.",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, les Pokémon en jeu de votre adversaire ayant au moins un marqueur de dégâts n'ont pas de talent, à l'exception des Pokémon-ex.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, los Pokémon en juego de tu rival que tengan algún contador de daño sobre ellos no tienen ninguna habilidad, excepto los Pokémon ex.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, i Pokémon in gioco del tuo avversario che hanno dei segnalini danno non hanno abilità, a eccezione dei Pokémon-ex.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, haben die Pokémon deines Gegners im Spiel, auf denen mindestens 1 Schadensmarke liegt, keine Fähigkeiten, außer Pokémon-ex.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, os Pokémon do seu oponente em jogo que tiverem algum contador de dano neles não têm Habilidades, exceto por Pokémon ex."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			'en-us': "Land Scoop",
			'fr-fr': "Rafle Terrestre",
			'es-es': "Palada de Tierra",
			'it-it': "Raccolta di Terra",
			'de-de': "Landschaufel",
			'pt-br': "Escavar a Terra"
		},

		effect: {
			'en-us': "Put 2 damage counters on 1 of your opponent's Benched Pokémon.",
			'fr-fr': "Placez 2 marqueurs de dégâts sur l'un des Pokémon de Banc de votre adversaire.",
			'es-es': "Pon 2 contadores de daño en uno de los Pokémon en Banca de tu rival.",
			'it-it': "Metti due segnalini danno su uno dei Pokémon nella panchina del tuo avversario.",
			'de-de': "Lege 2 Schadensmarken auf 1 Pokémon auf der Bank deines Gegners.",
			'pt-br': "Coloque 2 contadores de dano em 1 dos Pokémon no Banco do seu oponente."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751791,
				tcgplayer: 535127,
				cardtrader: 274428
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	
}

export default card
