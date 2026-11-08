import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Galarian Slowbro V",
		'fr-fr': "Flagadoss de Galar V",
		'es-es': "Slowbro V de Galar",
		'it-it': "Slowbro di Galar V",
		'pt-br': "Slowbro de Galar V",
		'de-de': "Galar-Lahmus V"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [80],
	set: Set,
	hp: 210,

	types: [
		"Darkness",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Rapid-Fire Poison",
				'fr-fr': "Poison en Rafale",
				'es-es': "Ráfaga Venenosa",
				'it-it': "Scarica Velenosa",
				'pt-br': "Veneno de Disparo Rápido",
				'de-de': "Schnellfeuergift"
			},
			effect: {
				'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may make your opponent's Active Pokémon Poisoned.",
				'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez laisser le Pokémon Actif de votre adversaire Empoisonné.",
				'es-es': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes dejar al Pokémon Activo de tu rival Envenenado.",
				'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi lasciare il Pokémon attivo del tuo avversario avvelenato.",
				'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá deixar o Pokémon Ativo do seu oponente Envenenado.",
				'de-de': "Einmal während deines Zuges, wenn diese Pokémon in der Aktiven Position ist, kannst du das Aktive Pokémon deines Gegners vergiften."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Tripping Shot",
				'fr-fr': "Coup Croche-Pied",
				'es-es': "Disparo Tropiezo",
				'it-it': "Colpo Inciampo",
				'pt-br': "Disparo Rasteiro",
				'de-de': "Stolperschuss"
			},
			effect: {
				'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483374,
				tcgplayer: 219399
			}
		},
	],
}

export default card
