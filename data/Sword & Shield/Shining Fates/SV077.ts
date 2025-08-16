import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [110],
	set: Set,

	name: {
		fr: "Smogogo de Galar",
		en: "Galarian Weezing",
		es: "Weezing de Galar",
		it: "Weezing di Galar",
		pt: "Weezing de Galar",
		de: "Galar-Smogmog"
	},

	illustrator: "Kouki Saitou",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Smogo",
		en: "Koffing"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Gaz Inhibiteur",
			en: "Neutralizing Gas",
			es: "Gas Reactivo",
			it: "Gas Reagente",
			pt: "Gás Neutralizador",
			de: "Reaktionsgas"
		},

		effect: {
			fr: "Tant que ce Pokémon est sur le Poste Actif, les Pokémon en jeu de votre adversaire n'ont pas de talent, à l'exception de Gaz Inhibiteur.",
			en: "As long as this Pokémon is in the Active Spot, your opponent's Pokémon in play have no Abilities, except for Neutralizing Gas.",
			es: "Mientras este Pokémon esté en el Puesto Activo, los Pokémon en juego de tu rival no tienen ninguna habilidad, excepto Gas Reactivo.",
			it: "Fintanto che questo Pokémon è in posizione attiva, i Pokémon in gioco del tuo avversario non hanno abilità, a eccezione di Gas Reagente.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, os Pokémon em jogo do seu oponente não têm Habilidades, exceto por Gás Neutralizador.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, haben die Pokémon deines Gegners im Spiel keine Fähigkeiten, außer Reaktionsgas."
		}
	}],

	attacks: [{
		name: {
			fr: "Poison Violent",
			en: "Severe Poison",
			es: "Veneno Grave",
			it: "Maloveleno",
			pt: "Veneno Forte",
			de: "Pures Gift"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 4 marqueurs de dégâts au lieu d'un sur ce Pokémon-là pendant le Contrôle Pokémon.",
			en: "Your opponent's Active Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon during Pokémon Checkup.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 4 contadores de daño en vez de 1 en ese Pokémon durante el Chequeo Pokémon.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Metti quattro segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 4 contadores de dano ao invés de 1 naquele Pokémon durante o Checape Pokémon.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 4 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
		},

		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "This Pokémon consumes particles that contaminate the air. Instead of leaving droppings, it expels clean air."
	}
}

export default card
