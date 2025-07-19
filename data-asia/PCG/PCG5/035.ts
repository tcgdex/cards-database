import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Magneton",
         ja: "マグネトン",
         fr: "Magnéton",
         de: "Magneton",
         es: "Magnetón",
         it: "Magneton",
         pt: "Magneton",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [82],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Reactive Recharge",
            ja: "反応性充電",
            fr: "Recharge réactive",
            de: "Reaktive Aufladung",
            es: "Recarga reactiva",
            it: "Ricarica reattiva",
            pt: "Recarga reativa",
          },
          effect: {
            en: "If Magneton would be Knocked Out by damage from an opponent's attack, you may move any number of React Energy cards from Magneton to your PokÃ©mon in any way you like.",
            ja: "マグネトンが相手の攻撃によるダメージによってノックアウトされる場合、あなたが好きな方法でマグネトンからポカモンに任意の数のReactエネルギーカードを移動することができます。",
            fr: "Si Magneton était assommé par les dommages de l'attaque d'un adversaire, vous pouvez déplacer n'importe quel nombre de cartes d'énergie React de Magneton à votre poké de quelque manière que ce soit.",
            de: "Wenn Magneton durch Schäden durch den Angriff eines Gegners ausgeschaltet wird, können Sie eine beliebige Anzahl von React -Energiekarten von Magneton auf Ihre mögliche Weise zu Ihrem Poké Mon verschieben.",
            es: "Si Magneton fuera noqueado por el daño del ataque de un oponente, puede mover cualquier cantidad de cartas de energía React de Magneton a su Poké Mon de cualquier manera que desee.",
            it: "Se Magneton fosse eliminato dal danno da un attacco di un avversario, puoi spostare un numero qualsiasi di carte di energia react da Magneton al tuo poké mon in qualsiasi modo.",
            pt: "Se Magneton seria nocauteado por danos causados pelo ataque de um oponente, você poderá mover qualquer número de cartões de energia do React de Magneton para o seu Poké Mon da maneira que desejar.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Multiple Force",
            ja: "複数の力",
            fr: "Force multiple",
            de: "Mehrfachkraft",
            es: "Fuerza múltiple",
            it: "Forza multipla",
            pt: "Força múltipla",
          },
          effect: {
            en: "If Magneton has any React Energy cards attached to it, this attack does 30 damage plus 10 more damage for each Magnemite and Magneton (both yours and your opponent's) in play.",
            ja: "Magnetonに反応エネルギーカードが付属している場合、この攻撃は30のダメージと、各マグネマイトとマグネトン（あなたと対戦相手の両方）に対してさらに10ダメージを与えます。",
            fr: "Si Magneton a des cartes d'énergie React qui lui sont attachées, cette attaque fait 30 dégâts plus 10 dégâts supplémentaires pour chaque magmemite et magnéton (le vôtre et celle de votre adversaire) en jeu.",
            de: "Wenn Magneton an diesem Angriff einen React -Energiekarten befestigt ist, verursacht dieser Angriff 30 Schäden plus 10 weitere Schäden für jeden Magnemit und Magneton (sowohl in Ihrem als auch für die Ihres Gegners) im Spiel.",
            es: "Si Magneton tiene alguna tarjetas de energía reaccionadas unidas, este ataque hace 30 daños más 10 daños más por cada Magnemite y Magneton (tanto tuya como de tu oponente) en juego.",
            it: "Se Magneton ha delle carte di energia React ad esso collegate, questo attacco infligge 30 danni in più per ciascun Magnemite e Magneton (sia il tuo che il tuo avversario) in gioco.",
            pt: "Se o Magneton tiver algum cartão de energia do React anexado a ele, esse ataque causará 30 danos mais 10 danos a cada magnemite e magneton (tanto o seu quanto o do seu oponente) em jogo.",
          },
        },
        {
          cost: ["Lightning", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Magnetic Blast",
            ja: "磁気爆発",
            fr: "Explosion magnétique",
            de: "Magnetische Explosion",
            es: "Explosión magnética",
            it: "Esplosione magnetica",
            pt: "Explosão magnética",
          },
          damage: 60,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
