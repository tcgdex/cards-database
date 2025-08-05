import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Blastoise - 108/128",
         ja: "ブラストワーズ-108/128",
         fr: "Blastoise - 108/128",
         de: "Blastoise - 108/128",
         es: "Blastoise - 108/128",
         it: "Blastoise - 108/128",
         pt: "Blastoise - 108/128",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [9],
      hp: 100,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Jet Stream",
            ja: "ジェットストリーム",
            fr: "Jet",
            de: "Jetstream",
            es: "Corriente de jet",
            it: "Jet Stream",
            pt: "Jet Stream",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if Blastoise is your Active Pokmon, you may flip a coin. If heads, discard an Energy card attached to Blastoise, if any. Then, if there are any Energy cards attached to the Defending Pokmon, choose 1 of them and discard it. This power can't be used if Blastoise is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）</em> </em>、BlastoiseがアクティブなPokmonである場合、コインをひっくり返すことができます。頭の場合は、爆風に取り付けられたエネルギーカードを捨ててください。次に、防衛ポクモンにエネルギーカードが接続されている場合は、それらの1つを選択して破棄します。爆風が特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, si Blastoise est votre pokmon actif, vous pouvez retourner une pièce. Si les têtes, jetez une carte d'énergie attachée à Blastoise, le cas échéant. Ensuite, s'il y a des cartes d'énergie attachées au Pokmon en défense, choisissez 1 d'entre elles et jetez-la. Cette puissance ne peut pas être utilisée si Blastoise est affectée par une condition spéciale.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em>, wenn Blastoise Ihr aktives Pokmon ist, können Sie eine Münze umdrehen. Wenn Sie Köpfe haben, entsorgen Sie eine Energiekarte, die an Blastoise verbunden ist, falls vorhanden. Wenn an dem verteidigenden Pokmon Energy -Karten angebracht sind, wählen Sie 1 davon und entwerfen Sie. Diese Kraft kann nicht verwendet werden, wenn Blastoise von einem besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, si Blastoise es su Pokmon activo, puede voltear una moneda. Si se dirige, deseche una tarjeta de energía unida a Baldoise, si corresponde. Luego, si hay tarjetas de energía adjuntas al Pokmon defensor, elija 1 de ellas y descartes. Esta potencia no se puede usar si Blastoise se ve afectada por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, se Blastoise è il tuo Pokmon attivo, puoi capovolgere una moneta. Se le teste, scartare una carta energetica attaccata al blastoise, se presente. Quindi, se ci sono carte di energia collegate al Pokmon in difesa, scegli 1 e scartalo. Questa potenza non può essere utilizzata se il blastoise è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se Blastoise for o seu Pokmon ativo, você pode virar uma moeda. Se as cabeças, descarte um cartão de energia anexado ao Blastoise, se houver. Então, se houver cartas de energia anexadas ao Pokmon defensor, escolha 1 deles e descarte -o. Esse poder não pode ser usado se Blastoise for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Energy Cannon",
            ja: "エネルギー大砲",
            fr: "Canon d'énergie",
            de: "Energiekanone",
            es: "Cañón de energía",
            it: "Cannone energetico",
            pt: "Canhão de energia",
          },
          effect: {
            en: "Does 40 damage plus 10 more damage for each Energy attached to Blastoise but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
            ja: "40のダメージに加えて、爆風に付着した各エネルギーのダメージがさらに10件ありますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
            fr: "Fait 40 dégâts plus 10 dommages supplémentaires pour chaque énergie attachée à Blastoise mais pas utilisé pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette manière.",
            de: "Fügt 40 Schäden plus 10 weitere Schäden für jede Energie, die an Blastoise verbunden ist, aber nicht verwendet wird, um die Energiekosten dieses Angriffs zu bezahlen. Auf diese Weise können Sie nicht mehr als 20 Schäden hinzufügen.",
            es: "Hace 40 daños más 10 daños más por cada energía adjunta a Blastoise pero no se usa para pagar el costo de energía de este ataque. No puede agregar más de 20 daños de esta manera.",
            it: "Fa 40 danni più 10 danni in più per ogni energia attaccata al blastoise ma non è usato per pagare il costo energetico di questo attacco. Non puoi aggiungere più di 20 danni in questo modo.",
            pt: "40 danos mais 10 mais 10 danos para cada energia associada a Blastoise, mas não costumava pagar pelo custo de energia desse ataque. Você não pode adicionar mais de 20 danos dessa maneira.",
          },
        },
      ],

      retreat: 2,

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
