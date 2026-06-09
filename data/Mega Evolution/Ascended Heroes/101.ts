import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Dugtrio",
		fr: "Triopikeur de la Team Rocket",
		es: "Dugtrio del Team Rocket",
		'es-mx': "Dugtrio del Equipo Rocket",
		de: "Team Rockets Digdri",
		it: "Dugtrio del Team Rocket",
		pt: "Dugtrio da Equipe Rocket"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Holes",
			fr: "Trous",
			es: "Socavones",
			'es-mx': "Baches",
			de: "Löcher graben",
			it: "Buche",
			pt: "Buracos"
		},

		effect: {
			en: "Whenever your opponent's Active Pokémon moves to the Bench during their turn, place 2 damage counters on that Pokémon.",
			fr: "Chaque fois que le Pokémon Actif de votre adversaire se déplace vers le Banc pendant son tour, placez 2 marqueurs de dégâts sur ce Pokémon-là.",
			es: "Cada vez que el Pokémon Activo de tu rival se mueva a la Banca durante su turno, pon 2 contadores de daño en ese Pokémon.",
			'es-mx': "Cada vez que el Pokémon Activo de tu rival se mueva a la Banca durante su turno, pon 2 contadores de daño en ese Pokémon.",
			de: "Lege jedes Mal, wenn das Aktive Pokémon deines Gegners während seines Zuges auf die Bank wechselt, 2 Schadensmarken auf jenes Pokémon.",
			it: "Ogni volta che il Pokémon attivo del tuo avversario si sposta in panchina durante il suo turno, metti due segnalini danno su quel Pokémon.",
			pt: "Sempre que o Pokémon Ativo do seu oponente for movido para o Banco durante o turno dele, coloque 2 contadores de dano naquele Pokémon."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Mud Shot",
			fr: "Tir de Boue",
			es: "Disparo Lodo",
			'es-mx': "Disparo de Lodo",
			de: "Lehmschuss",
			it: "Colpodifango",
			pt: "Tiro de Lama"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869712,
			tcgplayer: 675913
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870297,
			tcgplayer: 677073
		}
	},
	{
		type: "reverse",
		foil: "team-rocket",
		thirdParty: {
			cardmarket: 870298,
			tcgplayer: 676933
		}
	},
],
}

export default card