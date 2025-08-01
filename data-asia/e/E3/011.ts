import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Victreebel - 011/087",
         ja: "Victreebel -011/087",
         fr: "Victreebel - 011/087",
         de: "Victreebel - 011/087",
         es: "Victreebel - 011/087",
         it: "Victreebel - 011/087",
         pt: "Victreebel - 011/087",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [71],
      hp: 90,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Fragrance Trap",
            ja: "フレグランストラップ",
            fr: "Piège à parfum",
            de: "Duftfalle",
            es: "Trampa de fragancia",
            it: "Trappola per fragranze",
            pt: "Armadilha de fragrâncias",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, choose 1 of your opponent's Benched Pokmon and switch the Defending Pokmon with it. This power can't be used if Victreebel is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、対戦相手のベンチポクモンの1つを選択し、防御するポクモンをそれで切り替えます。 Victreebelが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si les têtes, choisissez 1 des Pokmon bancés de votre adversaire et passez le Pokmon en défense avec. Cette puissance ne peut pas être utilisée si Victreebel est affectée par une condition spéciale.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Sie Köpfe haben, wählen Sie 1 der Bank -Benched -Pokmon Ihres Gegners und wechseln Sie damit das verteidigende Pokmon damit. Diese Kraft kann nicht verwendet werden, wenn Victreebel von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si se dirige, elija 1 de los pokmon de banca de su oponente y cambie el pokmon defensor con él. Esta potencia no se puede usar si Victreebel se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se le teste, scegli 1 dei Pokmon in panchina del tuo avversario e cambia con sé i Pokmon in difesa. Questa potenza non può essere utilizzata se Victreebel è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, escolha 1 do Pokmon bancado do seu oponente e mude o Pokmon defensor com ele. Esse poder não pode ser usado se Victreebel for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Corrosive Acid",
            ja: "腐食性酸",
            fr: "Acide corrosif",
            de: "Ätzende Säure",
            es: "Ácido corrosivo",
            it: "Acido corrosivo",
            pt: "Ácido corrosivo",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Burned.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンが燃やされます。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant brûlé.",
            de: "Eine Münze drehen. Wenn Köpfe, wird das verteidigende Pokemon jetzt verbrannt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora se quema.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in difesa viene ora bruciato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está queimado.",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
