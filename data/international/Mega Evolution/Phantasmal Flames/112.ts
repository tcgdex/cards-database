import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mismagius ex",
		'fr-fr': "Magirêve-ex",
		'es-es': "Mismagius ex",
		'es-mx': "Mismagius ex",
		'de-de': "Traunmagil-ex",
		'it-it': "Mismagius-ex",
		'pt-br': "Mismagius ex"
	},
	evolveFrom: {
		'en-us': "Misdreavus",
		'de-de': "Traunfugil",
		'es-es': "Misdreavus",
		'fr-fr': "Feuforêve",
		'it-it': "Misdreavus",
		'pt-br': "Misdreavus",
	},

	rarity: "Ultra Rare",
	category: "Pokemon",

	dexId: [429],
	hp: 260,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Swirling Prose",
			'fr-fr': "Prose Tourbillonnante",
			'es-es': "Prosa Remolino",
			'es-mx': "Prosa Espiral",
			'de-de': "Wirbelnde Worte",
			'it-it': "Prosa Vorticosa",
			'pt-br': "Prosa Rodopiante"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, whenever your opponent's Active Pokémon moves to the Bench during their turn, their new Active Pokémon is now Confused.",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, à chaque fois que le Pokémon Actif de votre adversaire se déplace vers le Banc pendant son tour, son nouveau Pokémon Actif est alors Confus.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, cada vez que el Pokémon Activo de tu rival se mueva a la Banca durante su turno, su nuevo Pokémon Activo pasa a estar Confundido.",
			'es-mx': "Mientras este Pokémon esté en el Puesto Activo, cada vez que el Pokémon Activo de tu rival se mueva a la Banca durante su turno, su nuevo Pokémon Activo ahora está Confundido.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, ist jedes Mal, wenn das Aktive Pokémon deines Gegners während seines Zuges auf die Bank wechselt, sein neues Aktives Pokémon jetzt verwirrt.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, ogni volta che il Pokémon attivo del tuo avversario si sposta in panchina durante il suo turno, il suo nuovo Pokémon attivo viene confuso.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, sempre que o Pokémon Ativo do seu oponente for movido para o Banco durante o turno dele, o novo Pokémon Ativo dele agora estará Confuso."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Hexa-Magic",
			'fr-fr': "Hexa-Magie",
			'es-es': "Hexamagia",
			'es-mx': "Hexamagia",
			'de-de': "Hexa-Magie",
			'it-it': "Esastregoneria",
			'pt-br': "Hexamagia"
		},

		effect: {
			'en-us': "You may draw cards until you have 6 cards in your hand.",
			'fr-fr': "Vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			'es-es': "Puedes robar cartas hasta tener 6 cartas en tu mano.",
			'es-mx': "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			'de-de': "Du kannst so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast.",
			'it-it': "Puoi pescare fino ad avere sei carte in mano.",
			'pt-br': "Você pode comprar cartas até ter 6 cartas na sua mão."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	illustrator: "5ban Graphics",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 857687,
				tcgplayer: 662200,
				cardtrader: 356898
			}
		},
	],
}

export default card
