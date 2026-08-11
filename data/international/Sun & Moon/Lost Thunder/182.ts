import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Lusamine ◇",
		'fr-fr': "Elsa-Mina ◇",
		'es-es': "Samina ◇",
		'it-it': "Samina ◇",
		'pt-br': "Samina ◇",
		'de-de': "Samantha ◇"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "You can play this card only if your opponent has exactly 3 Prize cards remaining.\n\nPrevent all damage done to your Ultra Beasts by attacks during your opponent’s next turn.",
		'fr-fr': "Vous ne pouvez jouer cette carte que s’il reste exactement 3 cartes Récompense à votre adversaire.\n\nÉvitez tous les dégâts infligés à vos Ultra-Chimères par des attaques pendant le prochain tour de votre adversaire.",
		'es-es': "Puedes jugar esta carta solo si a tu rival le quedan exactamente 3 cartas de Premio.\n\nEvita todo el daño infligido a tus Ultraentes por ataques durante el próximo turno de tu rival.",
		'it-it': "Puoi giocare questa carta solo se il tuo avversario ha esattamente tre carte Premio rimanenti.\n\nPrevieni tutti i danni inflitti alle tue Ultracreature da qualsiasi attacco durante il prossimo turno del tuo avversario.",
		'pt-br': "Você só pode jogar esta carta se seu oponente tiver exatamente 3 cartas de Prêmio restantes.\n\nPrevenirá todo o dano causado às suas Ultracriaturas por ataques durante a próxima vez de jogar do seu oponente.",
		'de-de': "Du kannst diese Karte nur spielen, wenn dein Gegner genau 3 verbleibende Preiskarten hat.\n\nVerhindere allen Schaden, der deinen Ultrabestien während des nächsten Zuges deines Gegners durch Attacken zugefügt wird."
	},

	thirdParty: {
		cardmarket: 365816
	}
}

export default card
