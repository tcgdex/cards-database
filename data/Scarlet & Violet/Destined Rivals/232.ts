import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Toxicroak ex",
		fr: "Coatox-ex",
		de: "Toxiquak-ex",
		it: "Toxicroak-ex",
		es: "Toxicroak ex",
		pt: "Toxicroak ex"
	},

	illustrator: "PLANETA Hiiragi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 250,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Nasty Plot",
			fr: "Machination",
			de: "Ränkeschmied",
			it: "Congiura",
			es: "Maquinación",
			pt: "Trama Maldosa"
		},

		effect: {
			en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			es: "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Toxic Ripper",
			fr: "Étripage Toxique",
			de: "Giftiger Reißer",
			it: "Squarciatossina",
			es: "Destrucción Tóxica",
			pt: "Rasgo Tóxico"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 6 damage counters on that Pokémon instead of 1.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 6 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 6 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Metti sei segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el Chequeo Pokémon, pon 6 contadores de daño en vez de uno en ese Pokémon.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o Checape Pokémon, coloque 6 contadores de dano ao invés de 1 naquele Pokémon."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card