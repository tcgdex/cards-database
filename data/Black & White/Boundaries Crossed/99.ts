import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Flygon",
		fr: "Libégon",
		es: "Flygon",
		it: "Flygon",
		pt: "Flygon",
		de: "Libelldra"
	},
	illustrator: "BERUBURI",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 140,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sand Slammer",
				fr: "Prison de Sable",
				es: "Prisión de Arena",
				it: "Silicogabbia",
				pt: "Batedor de Areia",
				de: "Sandwucht"
			},
			effect: {
				en: "At any time between turns, if this Pokémon is your Active Pokémon, put 1 damage counter on each of your opponent’s Pokémon.",
				fr: "N’importe quand entre chaque tour, si ce Pokémon est votre Pokémon Actif, placez 1 marqueur de dégâts sur chacun des Pokémon de votre adversaire.",
				es: "En cualquier momento entre turnos, si este Pokémon es tu Pokémon Activo, pon 1 contador de daño en cada uno de los Pokémon de tu rival.",
				it: "Tra un turno e l’altro, in qualsiasi momento, se questo Pokémon è il tuo Pokémon attivo, metti un segnalino danno su ciascuno dei Pokémon del tuo avversario.",
				pt: "A qualquer momento entre as vezes de jogar, se este Pokémon for seu Pokémon Ativo, coloque 1 marcador de danos em cada um dos Pokémon do seu oponente.",
				de: "Ist dieses Pokémon dein Aktives Pokémon, lege zu einem beliebigen Zeitpunkt zwischen den Zügen 1 Schadensmarke auf jedes Pokémon deines Gegners."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flying Beatdown",
				fr: "Dérouillée Volante",
			},
			effect: {
				en: "You may discard a Grass Energy and a Fighting Energy attached to this Pokémon. If you do, the Defending Pokémon is now Paralyzed.",
				fr: "Vous pouvez défausser une Énergie Grass et une Énergie Fighting attachées à ce Pokémon. Dans ce cas, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
