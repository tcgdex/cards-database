import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
		es: "Spiritomb",
		it: "Spiritomb",
		pt: "Spiritomb",
		de: "Kryppuk"
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		442,
	],
	hp: 60,
	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Cursed Whirlpool",
				fr: "Tourbillon Maudit",
				es: "Torbellino Maldito",
				it: "Mulinello Maledetto",
				pt: "Redemoinho Amaldiçoado",
				de: "Verfluchter Strudel"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent’s Active Pokémon can’t retreat.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, le Pokémon Actif de votre adversaire ne peut pas battre en retraite.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, el Pokémon Activo de tu rival no puede retirarse.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, il Pokémon attivo del tuo avversario non può ritirarsi.",
				pt: "Enquanto este Pokémon for o seu Pokémon Ativo, o Pokémon Ativo do seu oponente não poderá recuar.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, kann sich das Aktive Pokémon deines Gegners nicht zurückziehen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Cursed Drop",
				fr: "Chute Maudite",
				es: "Caída Maldita",
				it: "Caduta Maledetta",
				pt: "Queda Amaldiçoada",
				de: "Verfluchter Fall"
			},
			effect: {
				en: "Put 3 damage counters on your opponent’s Pokémon in any way you like.",
				fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				es: "Pon 3 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				it: "Distribuisci a piacimento tre segnalini danno sui Pokémon del tuo avversario.",
				pt: "Coloque 3 contadores de dano nos Pokémon do seu oponente como desejar.",
				de: "Lege 3 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

		},
	],


	retreat: 2,



}

export default card
