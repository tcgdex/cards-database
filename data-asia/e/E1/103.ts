import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Charizard - 103/128",
         ja: "Charizard -103/128",
         fr: "Charizard - 103/128",
         de: "Charizard - 103/128",
         es: "Charizard - 103/128",
         it: "Charizard - 103/128",
         pt: "Charizard - 103/128",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [6],
      hp: 120,
      types: ["Fire"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Burning Energy",
            ja: "燃焼エネルギー",
            fr: "Énergie brûlante",
            de: "Brennenergie",
            es: "Energía ardiente",
            it: "Energia bruciata",
            pt: "Energia de queima",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may turn all basic Energy cards attached to all of your Pokmon into Fire Energy for the rest of the turn. This power can't be used if Charizard is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）</em> </em>、すべてのPokmonに取り付けられたすべての基本エネルギーカードを、残りの部分で火災エネルギーに変えることができます。 Charizardが特別な状態の影響を受けた場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez transformer toutes les cartes d'énergie de base attachées à tous vos pokmon en énergie de feu pour le reste du tour. Cette puissance ne peut pas être utilisée si Charizard est affecté par une condition spéciale.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie alle grundlegenden Energiekarten für den Rest der Kurve in Brandenergie in Brandenergie verwandeln. Diese Kraft kann nicht angewendet werden, wenn Charizard von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede convertir todas las cartas de energía básicas unidas a todos sus Pokmon en energía de fuego para el resto del turno. Esta potencia no se puede usar si Charizard se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi trasformare tutte le carte di energia di base collegate a tutti i tuoi Pokmon in energia al fuoco per il resto del turno. Questa potenza non può essere utilizzata se Charizard è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode transformar todos os cartões de energia básicos anexados a todo o seu Pokmon em energia de fogo pelo resto do turno. Esse poder não pode ser usado se Charizard for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Fire", "Fire", "Fire"],
          name: {
            en: "Scorching Whirlwind",
            ja: "渦巻く渦巻き",
            fr: "Tourbillon torride",
            de: "Wirbelwind",
            es: "Torbellino abrasador",
            it: "Vortice torrido",
            pt: "Whirlwind escaldante",
          },
          effect: {
            en: "Flip 2 coins. If 1 of them is tails, discard 2 Energy cards attached to Charizard. If both are tails, discard all Energy cards attached to Charizard.",
            ja: "2つのコインをフリップします。それらの1つが尾の場合は、Charizardに取り付けられた2枚のエネルギーカードを破棄します。両方が尾の場合は、すべてのエネルギーカードをCharizardに取り付けます。",
            fr: "Flip 2 pièces. Si l'un d'entre eux est la queue, jetez 2 cartes d'énergie attachées à Charizard. Si les deux sont des queues, jetez toutes les cartes d'énergie attachées à Charizard.",
            de: "2 Münzen umdrehen. Wenn 1 von ihnen Schwänze ist, entsorgen Sie 2 Energiekarten, die an Charizard angebracht sind. Wenn beide Schwänze sind, verwerfen Sie alle an Charizard angeschlossenen Energiekarten.",
            es: "Flip 2 monedas. Si 1 de ellas es Tails, deseche 2 tarjetas de energía unidas a Charizard. Si ambas son colas, deseche todas las tarjetas de energía unidas a Charizard.",
            it: "Flip 2 monete. Se 1 di essi è coda, scartare 2 carte energetiche collegate a Charizard. Se entrambe sono code, scartare tutte le carte di energia collegate a Charizard.",
            pt: "Flip 2 moedas. Se um deles for cauda, descarte 2 cartões de energia anexados à Charizard. Se ambos são caudas, descarte todos os cartões de energia anexados à Charizard.",
          },
          damage: 120,
        },
      ],

      retreat: 3,

};
