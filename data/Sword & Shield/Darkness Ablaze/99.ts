import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Galarian Slowbro V",
		fr: "Flagadoss de Galar V",
		es: "Slowbro V de Galar",
		it: "Slowbro di Galar V",
		pt: "Slowbro de Galar V",
		de: "Galar-Lahmus V"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare V",
	category: "Pokemon",
	set: Set,
	hp: 210,

	types: [
		"Darkness",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Rapid-Fire Poison",
				fr: "Poison en Rafale",
				es: "Ráfaga Venenosa",
				it: "Scarica Velenosa",
				pt: "Veneno de Disparo Rápido",
				de: "Schnellfeuergift"
			},
			effect: {
				en: "Once during your turn, if this Pokémon is in the Active Spot, you may make your opponent's Active Pokémon Poisoned.",
				fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez laisser le Pokémon Actif de votre adversaire Empoisonné.",
				es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes dejar al Pokémon Activo de tu rival Envenenado.",
				it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi lasciare il Pokémon attivo del tuo avversario avvelenato.",
				pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá deixar o Pokémon Ativo do seu oponente Envenenado.",
				de: "Einmal während deines Zuges, wenn diese Pokémon in der Aktiven Position ist, kannst du das Aktive Pokémon deines Gegners vergiften."
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
				en: "Tripping Shot",
				fr: "Coup Croche-Pied",
				es: "Disparo Tropiezo",
				it: "Colpo Inciampo",
				pt: "Disparo Rasteiro",
				de: "Stolperschuss"
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
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

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 483374,
		tcgplayer: 219399
	}
}

export default card
