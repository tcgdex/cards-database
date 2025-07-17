import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Wigglytuff",
         ja: "ウィグリティフ",
         fr: "Wigglytuff",
         de: "Wigglytuff",
         es: "Wigglytuff",
         it: "Wigglytuff",
         pt: "Wigglytuff",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [40],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Good Neighbor",
            ja: "良い隣人",
            fr: "Bon voisin",
            de: "Guter Nachbar",
            es: "Buen vecino",
            it: "Buon vicino",
            pt: "Bom vizinho",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if Wigglytuff is on your Bench, you may flip a coin. If heads, each player removes up to 2 damage counters from his or her Active Pokmon. This power can't be used if you have already used another Wigglytuff's Good Neighbor Pok-Power this turn.",
            ja: "ターン中に（攻撃の前に）</em> </em>、Wigglytuffがベンチにある場合、コインをひっくり返すことができます。ヘッドの場合、各プレイヤーはアクティブなPokmonから最大2つのダメージカウンターを削除します。このターンを既に別のWigglytuffのGood Neighbor Pok-Powerを使用している場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, si Wigglytuff est sur votre banc, vous pouvez retourner une pièce. Si les têtes, chaque joueur retire jusqu'à 2 compteurs de dégâts de son pokmon actif. Cette puissance ne peut pas être utilisée si vous avez déjà utilisé un autre power de Wigglytuff voisine de ce tour.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em>, wenn Wigglytuff auf Ihrer Bank ist, können Sie eine Münze umdrehen. Wenn Köpfe, entfernt jeder Spieler bis zu 2 Schadenszähler von seinem aktiven Pokmon. Diese Kraft kann nicht verwendet werden, wenn Sie in dieser Runde bereits einen weiteren Wigglytuffs guten Nachbarn Pok-Power verwendet haben.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, si Wigglytuff está en su banco, puede voltear una moneda. Si se dirige, cada jugador elimina hasta 2 contadores de daño de su Pokmon activo. Esta potencia no se puede usar si ya ha usado el buen vecino de Wigglytuff, Pok-Power este turno.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, se WigglyTuff è in panchina, puoi capovolgere una moneta. Se la testa, ogni giocatore rimuove fino a 2 contatori di danno dai suoi Pokmon attivi. Questa potenza non può essere utilizzata se hai già usato il buon pok-power di un altro WigglyTuff in questo turno.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se o Wigglytuff estiver em seu banco, você poderá virar uma moeda. Se as cabeças, cada jogador remove até 2 contadores de danos de seu Pokmon ativo. Esse poder não pode ser usado se você já usou o bom vizinho de outro Wigglytuff, o Pok-Power neste turno.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Do the Wave",
            ja: "波をします",
            fr: "Faire la vague",
            de: "Mach die Welle",
            es: "Hacer la ola",
            it: "Fare l'onda",
            pt: "Faça a onda",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage times the number of Pokemon you have in play.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は、あなたがプレイしているポケモンの数を10回ダメージします。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts fois le nombre de Pokémon que vous avez en jeu.",
            de: "Eine Münze drehen. Wenn dieser Angriff auf Köpfe ist, schaden Sie 10 Schadenszeiten wie die Anzahl der Pokemon, die Sie im Spiel haben.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 veces el número de Pokémon que tienes en juego.",
            it: "Capovolgi una moneta. Se le teste, questo attacco fa 10 danni il numero di Pokemon che hai in gioco.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos às vezes o número de Pokémon que você tem em jogo.",
          },
        },
      ],

      retreat: 1,

};
