import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Agatha",
		en: "Agatha",
		es: "Agatha",
		it: "Agatha",
		pt: "Agatha",
		de: "Agathe"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		fr: "Déplacez jusqu’à 3 marqueurs de dégâts de votre Pokémon Actif vers le Pokémon Actif de votre adversaire.",
		en: "Move up to 3 damage counters from your Active Pokémon to your opponent’s Active Pokémon.",
		es: "Mueve hasta 3 contadores de daño de tu Pokémon Activo al Pokémon Activo de tu rival.",
		it: "Sposta fino a tre segnalini danno dal tuo Pokémon attivo al Pokémon attivo del tuo avversario.",
		pt: "Mova até 3 contadores de dano do seu Pokémon Ativo para o Pokémon Ativo do seu oponente.",
		de: "Verschiebe bis zu 3 Schadensmarken von deinem Aktiven Pokémon auf das Aktive Pokémon deines Gegners."
	},

	trainerType: "Supporter",
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card