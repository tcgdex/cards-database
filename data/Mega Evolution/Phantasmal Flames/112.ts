import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Mismagius ex",
		fr: "Magirêve-ex",
		es: "Mismagius ex",
		'es-mx': "Mismagius ex",
		de: "Traunmagil-ex",
		it: "Mismagius-ex",
		pt: "Mismagius ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Swirling Prose",
			fr: "Prose Tourbillonnante",
			es: "Prosa Remolino",
			'es-mx': "Prosa Espiral",
			de: "Wirbelnde Worte",
			it: "Prosa Vorticosa",
			pt: "Prosa Rodopiante"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, whenever your opponent's Active Pokémon moves to the Bench during their turn, their new Active Pokémon is now Confused.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, à chaque fois que le Pokémon Actif de votre adversaire se déplace vers le Banc pendant son tour, son nouveau Pokémon Actif est alors Confus.",
			es: "Mientras este Pokémon esté en el Puesto Activo, cada vez que el Pokémon Activo de tu rival se mueva a la Banca durante su turno, su nuevo Pokémon Activo pasa a estar Confundido.",
			'es-mx': "Mientras este Pokémon esté en el Puesto Activo, cada vez que el Pokémon Activo de tu rival se mueva a la Banca durante su turno, su nuevo Pokémon Activo ahora está Confundido.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, ist jedes Mal, wenn das Aktive Pokémon deines Gegners während seines Zuges auf die Bank wechselt, sein neues Aktives Pokémon jetzt verwirrt.",
			it: "Fintanto che questo Pokémon è in posizione attiva, ogni volta che il Pokémon attivo del tuo avversario si sposta in panchina durante il suo turno, il suo nuovo Pokémon attivo viene confuso.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, sempre que o Pokémon Ativo do seu oponente for movido para o Banco durante o turno dele, o novo Pokémon Ativo dele agora estará Confuso."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Hexa-Magic",
			fr: "Hexa-Magie",
			es: "Hexamagia",
			'es-mx': "Hexamagia",
			de: "Hexa-Magie",
			it: "Esastregoneria",
			pt: "Hexamagia"
		},

		effect: {
			en: "You may draw cards until you have 6 cards in your hand.",
			fr: "Vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			es: "Puedes robar cartas hasta tener 6 cartas en tu mano.",
			'es-mx': "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			de: "Du kannst so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast.",
			it: "Puoi pescare fino ad avere sei carte in mano.",
			pt: "Você pode comprar cartas até ter 6 cartas na sua mão."
		},

		damage: 150
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card