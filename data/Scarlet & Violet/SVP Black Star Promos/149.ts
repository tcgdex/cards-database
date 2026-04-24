import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [1025],
	set: Set,

	name: {
		en: "Pecharunt",
		fr: "Pêchaminus",
		es: "Pecharunt",
		it: "Pecharunt",
		pt: "Pecharunt",
		de: "Infamomo"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Toxic Subjugation",
			fr: "Emprise Toxique",
			es: "Controlador Tóxico",
			it: "Dominio Tossico",
			pt: "Subjugação Tóxica",
			de: "Giftige Knechtung"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, put 5 more damage counters on your opponent's Poisoned Pokémon during Pokémon Checkup.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, placez 5 marqueurs de dégâts supplémentaires sur les Pokémon Empoisonnés de votre adversaire pendant le Contrôle Pokémon.",
			es: "Mientras este Pokémon esté en el Puesto Activo, pon 5 contadores de daño más en los Pokémon Envenenados de tu rival durante el Chequeo Pokémon.",
			it: "Fintanto che questo Pokémon è in posizione attiva, metti altri cinque segnalini danno sui Pokémon avvelenati del tuo avversario durante il controllo Pokémon.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, coloque 5 contadores de dano a mais nos Pokémon Envenenados do seu oponente durante o Checape Pokémon.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, lege beim Pokémon-Check 5 Schadensmarken mehr auf die vergifteten Pokémon deines Gegners."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Poison Chain",
			fr: "Chaîne Poison",
			es: "Cadena Venenosa",
			it: "Catena Velenosa",
			pt: "Corrente Peçonhenta",
			de: "Giftige Kette"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o próximo turno do seu oponente, aquele Pokémon não poderá recuar.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Souichirou Gunjima"
}

export default card