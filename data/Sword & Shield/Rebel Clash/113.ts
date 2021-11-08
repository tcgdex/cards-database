import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Galarian Weezing",
		fr: "Smogogo de Galar",
		es: "Weezing de Galar",
		it: "Weezing di Galar",
		pt: "Weezing de Galar",
		de: "Galar-Smogmog"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo",
		es: "Koffing",
		it: "Koffing",
		pt: "Koffing",
		de: "Smogon"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Neutralizing Gas",
				fr: "Gaz Inhibiteur",
				es: "Gas Reactivo",
				it: "Gas Reagente",
				pt: "Gás Neutralizador",
				de: "Reaktionsgas"
			},
			effect: {
				en: "As long as this Pokémon is in the Active Spot, your opponent's Pokémon in play have no Abilities, except for Neutralizing Gas.",
				fr: "Tant que ce Pokémon est sur le Poste Actif, les Pokémon en jeu de votre adversaire n'ont pas de talent, à l'exception de Gaz Inhibiteur.",
				es: "Mientras este Pokémon esté en el Puesto Activo, los Pokémon en juego de tu rival no tienen ninguna habilidad, excepto Gas Reactivo.",
				it: "Fintanto che questo Pokémon è in posizione attiva, i Pokémon in gioco del tuo avversario non hanno abilità, a eccezione di Gas Reagente.",
				pt: "Enquanto este Pokémon estiver no Campo Ativo, os Pokémon em jogo do seu oponente não têm Habilidades, exceto por Gás Neutralizador.",
				de: "Solange dieses Pokémon in der Aktiven Position ist, haben die Pokémon deines Gegners im Spiel keine Fähigkeiten, außer Reaktionsgas."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Severe Poison",
				fr: "Poison Violent",
				es: "Veneno Grave",
				it: "Maloveleno",
				pt: "Veneno Forte",
				de: "Pures Gift"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon during Pokémon Checkup.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 4 marqueurs de dégâts au lieu d'un sur ce Pokémon-là pendant le Contrôle Pokémon.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 4 contadores de daño en vez de 1 en ese Pokémon durante el Chequeo Pokémon.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato. Metti quattro segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 4 contadores de dano ao invés de 1 naquele Pokémon durante o Checape Pokémon.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 4 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 130,
	types: ["Darkness"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "This Pokémon consumes particles that contaminate the air. Instead of leaving droppings, it expels clean air."
	}
}

export default card
