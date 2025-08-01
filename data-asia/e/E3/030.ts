import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Tentacruel - 030/087",
         ja: "Tentacruel -030/087",
         fr: "Tentacruel - 030/087",
         de: "Tentacruel - 030/087",
         es: "Tentacruel - 030/087",
         it: "Tentacruel - 030/087",
         pt: "Tentacruel - 030/087",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [73],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Strange Tentacles",
            ja: "奇妙な触手",
            fr: "Tentacules étranges",
            de: "Seltsame Tentakel",
            es: "Tentáculos extraños",
            it: "Strani tentacoli",
            pt: "Tentáculos estranhos",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, as long as the number of Energy cards attached to the Defending Pokmon is less than the number of Energy cards attached to your Active Pokmon, you may choose an Energy card, if any, in your opponent's discard pile and attach it to the Defending Pokmon. This power can't be used if Tentacruel is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前）</em> </em> </em>、防御するポクモンに添付されているエネルギーカードの数がアクティブなポクモンに添付されているエネルギーカードの数よりも少ない限り、相手の捨てられた山にエネルギーカードを選択し、防御ポッコモンに取り付けることができます。 Tentacruelが特別な状態の影響を受けている場合、この力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, tant que le nombre de cartes d'énergie attachées au Pokmon en défense est inférieur au nombre de cartes d'énergie attachées à votre Pokmon actif, vous pouvez choisir une carte d'énergie, le cas échéant, dans la pile de dépasse de votre adversaire et l'attacher au Pokmon défendant. Ce pouvoir ne peut pas être utilisé si Tentacruel est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges <em> (vor Ihrem Angriff) </em>, solange die Anzahl der an das verteidigenden Pokmon angeschlossenen Energiekarten geringer ist als die Anzahl der an Ihr aktiven Pokmon angeschlossenen Energiekarten ist, können Sie eine Energiekarte, falls vorhanden, in Ihrem Gegner wählen und an den verteidigenden Pokmon anbringen. Diese Kraft kann nicht angewendet werden, wenn Tentacruel von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, siempre que la cantidad de cartas de energía unidas al Pokmon defensor sea menor que la cantidad de cartas de energía unidas a su Pokmon activo, puede elegir una tarjeta de energía, si la hay, en la pila de descarga de su oponente y adjuntarlo al Pokmon defensor. Esta potencia no se puede usar si Tentacruel se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, fintanto che il numero di carte di energia collegate al Pokmon in difesa è inferiore al numero di carte di energia collegate al tuo Pokmon attivo, puoi scegliere una carta energetica, se presente, nella pila di scarto del tuo avversario e attaccarlo al Pokmon in difesa. Questa potenza non può essere utilizzata se Tentacruel è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, desde que o número de cartões de energia anexado ao defesa do Pokmon seja menor que o número de cartões de energia anexados ao seu Pokmon ativo, você pode escolher um cartão de energia, se houver, na pilha de descarte do seu oponente e anexá -lo ao defesa do Pokmon. Esse poder não pode ser usado se o tentacroel for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Poison Sting",
            ja: "毒物",
            fr: "Piqûre de poison",
            de: "Giftstich",
            es: "Picadura de veneno",
            it: "Sting veleno",
            pt: "Picada de veneno",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado.",
          },
          damage: 20,
        },
      ],


      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
