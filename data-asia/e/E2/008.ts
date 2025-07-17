import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Ariados - 008/092",
         ja: "アリアドス-008/092",
         fr: "Ariados - 008/092",
         de: "Ariados - 008/092",
         es: "Ariados - 008/092",
         it: "Ariados - 008/092",
         pt: "AIADOS - 008/092",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [168],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Gluey Slime",
            ja: "グルーイスライム",
            fr: "Gluey Slime",
            de: "Klebrigem Schleim",
            es: "Limo pegajoso",
            it: "Melma colla",
            pt: "Lodo de gluey",
          },
          effect: {
            en: "As long as Ariados is in play, each player must pay an additional Colorless to retreat his or her Active Pokmon. Gluey Slime can't make a player pay more than an additional Colorless to retreat a Pokmon, even if there is more than 1 Ariados in play.",
            ja: "アリアドスが遊んでいる限り、各プレイヤーはアクティブなポクモンを後退させるために追加の無色を支払う必要があります。 Gluey Slimeは、プレーンをプレイしている場合でも、プレイヤーにポクモンを後退させるために追加の無色よりも多く支払うことはできません。",
            fr: "Tant qu'Ariados est en jeu, chaque joueur doit payer un incolore supplémentaire pour retirer son pokmon actif. Gluey Slime ne peut pas faire payer à un joueur plus qu'un incolore supplémentaire pour retirer un pokmon, même s'il y a plus d'un Ariados en jeu.",
            de: "Solange Ariados im Spiel ist, muss jeder Spieler zusätzlich farblos zahlen, um seinen aktiven Pokmon zurückzuziehen. Gluey Slime kann einen Spieler nicht mehr als einen zusätzlichen farblosen zahlen lassen, um ein Pokmon zurückzuziehen, auch wenn mehr als 1 Ariados im Spiel sind.",
            es: "Mientras Ariados esté en juego, cada jugador debe pagar un incoloro adicional para retirar su Pokmon activo. Gluey Slime no puede hacer que un jugador pague más de un incoloro adicional para retirarse un Pokmon, incluso si hay más de 1 Ariados en juego.",
            it: "Finché Ariados è in gioco, ogni giocatore deve pagare un ulteriore incolore per ritirarsi i Pokmon attivi. Gluey Slime non può far pagare a un giocatore di più di un ulteriore incolore per ritirare un Pokmon, anche se in gioco ci sono più di 1 ariado.",
            pt: "Enquanto Ariadas estiver em jogo, cada jogador deve pagar um adicional incolor para recuar seu Pokmon ativo. Gluey Slime não pode fazer um jogador pagar mais do que um adicional incolor para recuar um Pokmon, mesmo que haja mais de 1 Arida em jogo.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Spider Force",
            ja: "クモ力",
            fr: "Force d'araignée",
            de: "Spinnenkraft",
            es: "Fuerza de araña",
            it: "Forza del ragno",
            pt: "Força de aranha",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage. If tails, this attack does 20 damage and the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与えます。尾の場合、この攻撃は20ダメージを与え、防御ポケモンが麻痺しています。",
            fr: "Retourner une pièce. Si la tête, cette attaque fait 20 dégâts plus 10 dégâts supplémentaires. Si Tails, cette attaque fait 20 dégâts et le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 20 Schäden plus 10 weitere Schäden. Wenn Schwänze, verursacht dieser Angriff 20 Schaden und das verteidigende Pokémon ist jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 10 más de daño. Si Tails, este ataque hace 20 daños y el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 10 altri danni. Se le code, questo attacco infligge 20 danni e il Pokemon in difesa è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 10 danos. Se as caudas, esse ataque causam 20 danos e o Pokémon atual está agora paralisado.",
          },
        },
      ],


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
