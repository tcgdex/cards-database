import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Dinglu-ex",
		en: "Ting-Lu ex",
		es: "Ting-Lu ex",
		it: "Ting-Lu-ex",
		pt: "Ting-Lu ex",
		de: "Dinglu-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 240,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Terre Maudite",
			en: "Cursed Land",
			es: "Tierra Maldita",
			it: "Terra Maledetta",
			pt: "Terra Amaldiçoada",
			de: "Verfluchtes Land"
		},

		effect: {
			fr: "Tant que ce Pokémon est sur le Poste Actif, les Pokémon en jeu de votre adversaire ayant au moins un marqueur de dégâts n'ont pas de talent, à l'exception des Pokémon-ex.",
			en: "As long as this Pokémon is in the Active Spot, your opponent's Pokémon in play that have any damage counters on them have no Abilities, except for Pokémon ex.",
			es: "Mientras este Pokémon esté en el Puesto Activo, los Pokémon en juego de tu rival que tengan algún contador de daño sobre ellos no tienen ninguna habilidad, excepto los Pokémon ex.",
			it: "Fintanto che questo Pokémon è in posizione attiva, i Pokémon in gioco del tuo avversario che hanno dei segnalini danno non hanno abilità, a eccezione dei Pokémon-ex.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, os Pokémon do seu oponente em jogo que tiverem algum contador de dano neles não têm Habilidades, exceto por Pokémon ex.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, haben die Pokémon deines Gegners im Spiel, auf denen mindestens 1 Schadensmarke liegt, keine Fähigkeiten, außer Pokémon-ex."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			fr: "Rafle Terrestre",
			en: "Land Scoop",
			es: "Palada de Tierra",
			it: "Raccolta di Terra",
			pt: "Escavar a Terra",
			de: "Landschaufel"
		},

		effect: {
			fr: "Placez 2 marqueurs de dégâts sur l'un des Pokémon de Banc de votre adversaire.",
			en: "Put 2 damage counters on 1 of your opponent's Benched Pokémon.",
			es: "Pon 2 contadores de daño en uno de los Pokémon en Banca de tu rival.",
			it: "Metti due segnalini danno su uno dei Pokémon nella panchina del tuo avversario.",
			pt: "Coloque 2 contadores de dano em 1 dos Pokémon no Banco do seu oponente.",
			de: "Lege 2 Schadensmarken auf 1 Pokémon auf der Bank deines Gegners."
		},

		damage: 150
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card