import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		en: "Crobat",
		fr: "Nostenfer",
		es: "Crobat",
		it: "Crobat",
		pt: "Crobat",
		de: "Iksbat"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Shadowy Envoy",
			fr: "Émissaire de l'Ombre",
			es: "Emisario Sombrío",
			it: "Emissario Oscuro",
			pt: "Enviado das Sombras",
			de: "Bote des Schattens"
		},

		effect: {
			en: "Once during your turn, if you played Janine's Secret Art from your hand this turn, you may draw cards until you have 8 cards in your hand.",
			fr: "Une fois pendant votre tour, si vous avez joué Art Secret de Jeannine de votre main pendant ce tour, vous pouvez piocher des cartes jusqu'à en avoir 8 en main.",
			es: "Una vez durante tu turno, si has jugado Artes Secretas de Sachiko de tu mano durante este turno, puedes robar cartas hasta que tengas 8 cartas en tu mano.",
			it: "Una sola volta durante il tuo turno, se hai giocato Arte Segreta di Nina dalla tua mano nel turno in corso, puoi pescare fino ad avere otto carte in mano.",
			pt: "Uma vez durante o seu turno, se você jogou Dom Secreto da Janine da sua mão neste turno, você poderá comprar cartas até ter 8 cartas na sua mão.",
			de: "Einmal während deines Zuges, wenn du Janinas Geheimkunst während dieses Zuges aus deiner Hand gespielt hast, kannst du so lange Karten ziehen, bis du 8 Karten auf deiner Hand hast."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Poison Fang",
			fr: "Crochet Venin",
			es: "Colmillo Veneno",
			it: "Velenodenti",
			pt: "Presa Venenosa",
			de: "Giftzahn"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 2 damage counters on that Pokémon instead of 1.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 2 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el Chequeo Pokémon, pon 2 contadores de daño en vez de uno en ese Pokémon.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Metti due segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o Checape Pokémon, coloque 2 contadores de dano ao invés de 1 naquele Pokémon.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 2 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
		},

		damage: 120
	}],

	retreat: 0,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card
